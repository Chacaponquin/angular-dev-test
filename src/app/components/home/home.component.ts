import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';
import { ROUTES } from 'src/app/constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  sections = [
    {
      route: ROUTES.ITEMS_LIST,
      image: IMAGES.ITEMS.src,
      alt: IMAGES.ITEMS.alt,
      buttonText: 'Items List',
    },
    {
      route: ROUTES.CATEGORIES_LIST,
      image: IMAGES.CATEGORIES.src,
      alt: IMAGES.CATEGORIES.alt,
      buttonText: 'Categories List',
    },
  ];

  ngOnInit(): void {}
}
