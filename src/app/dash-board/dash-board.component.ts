import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  slides = [{'image': 'assets/img/imgtest.jpg'}, {'image': 'assets/img/station1.jpg'},{'image': 'assets/img/station4.jpg'}, {'image': 'assets/img/imgte.jpg'}, {'image': 'assets/img/sation2.jpg'}];


  constructor() { }
  pictures = [
    {
      id: 1,
      title: 'Arts & Craft',
      img: 'assets/img/ArtsandCraft.jpg'
    },
    {
      id: 2,
      title: 'Gift Sets',
      img: 'assets/img/GiftSets.jpg'
    },
    {
      id: 3,
      title: 'School Bags',
      img: 'assets/img/SchoolBags.jpg'
    },
    {
      id: 4,
      title: 'Pencil',
      img: 'assets/img/pencil.jpg'
    },
    {
      id: 5,
      title: 'Office Supplies',
      img: 'assets/img/officeSupplies.jpg'
    },
    {
      id: 6,
      title: 'Student Stuff',
      img: 'assets/img/StudentStuff.jpg'
    },
    {
      id: 5,
      title: 'Calculators',
      img: 'assets/img/calculator.jpg'
    },
    {
      id: 6,
      title: 'Tapes',
      img: 'assets/img/tapes.jpg'
    },
  ];



  ngOnInit(): void {




  }




}
