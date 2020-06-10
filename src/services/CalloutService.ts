import Axios from "axios";

interface FruitRequestInterface {
  data: any[];
}

interface ImageRequestInterface {
  data: Blob;
}

export abstract class CalloutService {
  private static http = Axios.create();

  static async getAllFruit(): Promise<any>{
    const response = await this.http.get<FruitRequestInterface>('http://fantogramma.org/test.json');
    return response.data;
  }

  static async getImage(): Promise<Blob>{
    return await this.http.get<ImageRequestInterface>('http://fantogramma.org/test.png',{responseType: 'arraybuffer'}).then(response => new Buffer(response.data, 'binary').toString('base64'));
  }
  
}