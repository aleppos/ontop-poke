import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

const MAX_PAGES = 10;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage = 0;
  @Input() totalItems = 0;
  @Input() perPage = 0;
  @Output() pageChange = new EventEmitter<number>();

  totalPages: number | null = null;
  pages: number[] = [];

  ngOnChanges() {
    const pages = Math.ceil(this.totalItems / this.perPage);
    this.totalPages = isNaN(pages) ? null : pages;

    const startPage = Math.max(this.currentPage - MAX_PAGES, 1);
    const endPage = Math.min(this.currentPage + MAX_PAGES, pages);

    this.pages = Array.from(
      {
        length: endPage + 1 - startPage,
      },
      (value, index) => startPage + index,
    );
  }

  handlePageChange(page: number): void {
    this.pageChange.emit(Math.min(Math.max(page, 1), this.totalPages ?? 0));
  }
}
