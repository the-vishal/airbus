import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  getList() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open(
      'GET',
      'https://d3d3-2409-4055-1-34f9-442-90-f1fd-74a7.ngrok.io/api/v1/list'
    );
    xhr.setRequestHeader(
      'Cookie',
      'csrftoken=Ekkns2E4gRIgZ7yBCJadRbdlMyLimPXU02U1HVE8hRU61q996yILmZvDSQJJbUr7'
    );

    xhr.send();
  }
  downloadData(data: string) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        var blob = new Blob([data], { type: 'application/x-tar' });
        FileSaver.saveAs(blob, 'code.zip');
      }
    });

    xhr.open(
      'POST',
      'https://d3d3-2409-4055-1-34f9-442-90-f1fd-74a7.ngrok.io/api/v1/create-project'
    );
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader(
      'Cookie',
      'csrftoken=Ekkns2E4gRIgZ7yBCJadRbdlMyLimPXU02U1HVE8hRU61q996yILmZvDSQJJbUr7'
    );

    xhr.send(data);
  }
}
