import axios from 'axios';

class ModuleServiceClient {
  private readonly url: string;

  constructor() {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/magurman';
  }

  // tslint:disable-next-line:typedef
  public findModulesForCourse(cid: string, cb) {
    return axios.get(this.url + '/courses/' + cid + '/modules').then(cb);
  }
}
export default ModuleServiceClient;
