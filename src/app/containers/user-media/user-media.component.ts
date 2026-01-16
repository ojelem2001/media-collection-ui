import { isPlatformServer, isPlatformBrowser} from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit, signal } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../../services';
import { IFilterOptions, MediaType, IUser } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-media',
  standalone: false,
  templateUrl: './user-media.component.html',
  styleUrls: ['./user-media.component.css']
})
export class UserMediaComponent implements OnInit  {  
  protected readonly title = signal('my-media-collection');
  private platformId: Object;

  userId: string | undefined;
  mediaType = MediaType;
  isBrowser: boolean;

  currentFilters?: IFilterOptions;
  currentUser$?: Observable<IUser | null>;
 
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)){ return; }
    
    this.currentUser$ =  this.authService.currentUser$;

    this.route.params
    .pipe(
      take(1),
      map(params => params))
    .subscribe(params =>  this.userId = params['userId']);     
  }  

  onFiltersChanged(filters: IFilterOptions) {
    this.currentFilters = filters;
  }
}