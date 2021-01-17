import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Post} from '../../services/blog.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
  @Input() postData: Post;

  isPostActive = false;

  constructor() { }
}
