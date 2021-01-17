import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input} from '@angular/core';
import {Post} from '../../services/blog.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
  @Input() postData: Post;

  // Local component state
  isPostActive = false;

  get postLabel(): string {
    return this.isPostActive ? `ID: ${this.postData.id}` : `UID: ${this.postData.userId}`;
  }

  /**
   * Handle post activation when the host element is clicked
   */
  @HostListener('click')
  onPostClick(event: MouseEvent): void {
    this.isPostActive = !this.isPostActive;
  }
}
