import { Injectable } from '@angular/core';
import { CommunicationService } from '../Communication/communication.service';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {

  constructor(private communicationService: CommunicationService) { }

  serverFrameworks = ['.NET', 'Spring Boot', 'NodeJS', 'DJango'];
  clientFrameworks = ['Angular', 'React', 'Vanilla JS'];
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
    myMap.set('Spring Boot', 3);
    myMap.set('React', 4);
    myMap.set('VanillaJS', 5);
    myMap.set('NodeJS', 6);
    myMap.set('NET', 7);

    var data = JSON.stringify({
      serverFramework: myMap.get(serverName),
      clientFramework: myMap.get(clientName),
      projectName: projectName,
    });

    this.communicationService.downloadData(data);
  }
}
