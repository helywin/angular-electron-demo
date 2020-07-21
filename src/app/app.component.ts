import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clipboard-github';

  changeClipboard() {
    navigator.clipboard.readText().then(
      text => {
        navigator.clipboard.writeText(text.replace('github.com', 'github-download.oss-cn-hongkong.aliyuncs.com'));
      }
    );
  }
}
