import { TestBed } from '@angular/core/testing';

import { TemplateFormValidationService } from './template-form-validation.service';

describe('TemplateFormValidationService', () => {
  let service: TemplateFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
