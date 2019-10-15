export function DockerHubViewModel(data) {
  this.Name = 'DockerHub';
  this.URL = 'docker.io';
  // this.URL = '';
  this.Authentication = data.Authentication;
  this.Username = data.Username;
  this.Password = data.Password;
}
