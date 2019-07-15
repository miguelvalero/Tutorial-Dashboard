import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:8080';
  private socket;
  private socketPrivado;

  constructor() { }

  public Conectar (nombre: string) {
    this.socket = io(this.url);
    this.socket.emit ('nombre', nombre);
  }


  public EnviarMensaje (mensaje: string) {
    this.socket.emit ('mensaje', mensaje);
  }

  public Desconectar () {
    this.socket.disconnect();
  }

  public RecibirMensajes () {
      return Observable.create((observer) => {
          this.socket.on('conectados', (message) => {
              observer.next('conectados:' + message);
          });
          this.socket.on('mensaje', (message) => {
            observer.next('mensaje:' + message);
        });
      });
  }


  public ConectarPrivado () {
    this.socketPrivado = io(this.url + '/privado');
  }
  public EnviarMensajePrivado(message) {
    this.socketPrivado.emit('mensaje', message);
  }

  public RecibirMensajesPrivado = () => {
    return Observable.create((observer) => {

        // Aqui recojo los mensajes para el chat privado
        this.socketPrivado.on('mensaje', (message) => {
            // Envio los subscriptores el mensaje,
            // No hace falta etiquetar porque solo recibo mensajes, no conectados
            observer.next(message);
        });
    });
  }


  public DesconectarPrivado () {
    console.log ('desconectamos');
    this.socketPrivado.disconnect();
  }
}
