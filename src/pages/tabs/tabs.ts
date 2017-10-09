import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { SearchPage } from '../search/search';
import { MeetPage } from '../meet/meet';
import { ActivityPage } from '../activity/activity';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = SearchPage;
  tab3Root = MeetPage;
  tab4Root = ActivityPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
