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
          this.socket.on('tick', (message) => {
            observer.next('tick:' + message);
          });
      });
  }


  public ConectarPrivado (nombre: String) {
    this.socketPrivado = io(this.url + '/privado');
    this.socketPrivado.emit ('nombre', nombre);
  }
  public EnviarMensajePrivado(message) {
    this.socketPrivado.emit('mensaje', message);
  }

  public RecibirMensajesPrivado = () => {
    return Observable.create((observer) => {
        this.socketPrivado.on('conectados', (message) => {
            observer.next('conectados:' + message);
        });
        this.socketPrivado.on('mensaje', (message) => {
            observer.next('mensaje:' + message);
        });
    });
  }


  public DesconectarPrivado () {
    console.log ('desconectamos');
    this.socketPrivado.disconnect();
  }
}
