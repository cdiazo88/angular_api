import { TestBed } from '@angular/core/testing';

import { ServicioPostsService } from './servicio-posts.service';

describe('ServicioPostsService', () => {
  let service: ServicioPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
