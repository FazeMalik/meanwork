import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import {saveAs} from 'file-saver';

const uri = '/file/upload';

@Component ( {
   // selector: 'my-app',
    templateUrl: './fileupload.component.html',
    styleUrls: ['./fileupload.component.css']
   // providers: [FileService]
})
export class UploadComponent {

    uploader: FileUploader = new FileUploader({url: uri});
/*
    attachmentList: any = [];

    constructor(private _fileService: FileService) {

        this.uploader.onCompleteItem = (item: any, response: any , status: any, headers: any) => {
            this.attachmentList.push(JSON.parse(response)) ;
        }
    }

    download(index) {
        var filename = this.attachmentList[index].uploadname;

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
*/
  }
