import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  services = [
    { image: 'picture1.jpg', title: 'Бухгалтерський супровід ФОП' },
    { image: 'picture2.jpg', title: 'Організація обліку та облікова політика' },
    { image: 'picture3.jpg', title: 'Комплексне налаштування ПРРО' },
    { image: 'picture4.jpg', title: 'Комплексна автоматизація бухгалтерського обліку' }
  ];

  reasons = [
    'Професіоналізм: Наша команда складається з досвідчених бухгалтерів, які постійно підвищують свою кваліфікацію',
    'Конфіденційність: Ми гарантуємо повну конфіденційність всієї інформації',
    'Сучасні технології: Ми використовуємо сучасні програмні продукти для автоматизації бухгалтерських процесів',
    'Індивідуальний підхід: Ми розробляємо індивідуальні рішення для кожного клієнта.'
  ];
}
