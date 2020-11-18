import { Injectable } from '@nestjs/common';
import { readFile, unlink } from 'fs';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async handleImage(file) {
    const filePath =
      '/home/captainm3/work/nest-image-uploader' + `/${file.path}`;

    console.log(filePath);

    readFile(filePath, (err, imageData) => {
      if (err) {
        throw err;
      }

      const data = imageData.toString();

      // console.log(data);

      const formData = new FormData();

      formData.append('image', data);

      // , {
      //   filepath: filePath,
      // }

      console.log(formData);

      setTimeout(() => {
        unlink(filePath, () => {
          console.log('file is deleted');
        });
      }, 5000);

      // axios({
      //   method: 'post',
      //   url: 'myurl',
      //   data: formData,
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // })
      //   .then(function (response) {
      //     //handle success
      //     console.log(response);
      //   })
      //   .catch(function (response) {
      //     //handle error
      //     console.log(response);
      //   });
    });

    console.log(file);
  }
}
