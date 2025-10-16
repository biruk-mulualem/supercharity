import { TestBed } from '@angular/core/testing';

import { ArticlePageServices } from './article-page.services';

describe('ArticlePageServices', () => {
  let service: ArticlePageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlePageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
