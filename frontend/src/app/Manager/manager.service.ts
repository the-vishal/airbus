import { Injectable } from '@angular/core';
import { CommunicationService } from '../Communication/communication.service';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {

  constructor(private communicationService: CommunicationService) { }

  serverFrameworks = ['C#', 'Python', 'Java', 'NodeJS', 'DJango'];
  clientFrameworks = ['Angular', 'React', 'JS'];
  languages = ['English', 'हिंदी', 'Français', 'Español', '中文', '日本語'];
  codes = ['en', 'hin', 'fr', 'es', 'zh', 'ja'];

  downloadData(projectName: string, serverName: string, clientName: string) {
    serverName = serverName
      .replace(/[^\w\s]/gi, '')
      .replace(/[0-9]/g, '')
      .replace(/ /g, '');
    clientName = clientName
      .replace(/[^\w\s]/gi, '')
      .replace(/[0-9]/g, '')
      .replace(/ /g, '');

    let myMap = new Map();
    myMap.set('DJango', 1);
    myMap.set('Angular', 2);

    var data = JSON.stringify({
      serverFramework: myMap.get(serverName),
      clientFramework: myMap.get(clientName),
      projectName: projectName,
    });

    this.communicationService.downloadData(data);
  }
}
