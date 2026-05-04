import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroCard } from './components/HeroCard';
import { GridCard } from './components/GridCard';
import { HomePage } from './components/HomePage';
import { DrinkwarePage } from './components/DrinkwarePage';
import { KitchenwarePage } from './components/KitchenwarePage';
import { UmbrellasAndBagsPage } from './components/UmbrellasAndBagsPage';
import { CapsAndApparelPage } from './components/CapsAndApparelPage';
import { NotebooksAndPensPage } from './components/NotebooksAndPensPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { BundlePage } from './components/BundlePage';
import { InfoPage } from './components/InfoPage';

const imageModules = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, { default: string }>;
const localImages = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const key = path
      .replace(/^\/src\/assets\/images\//, '')
      .replace(/\.(png|jpe?g|webp)$/, '');
    return [key, module.default];
  }),
) as Record<string, string>;

const cardImages = {
  eisBanner: localImages['eisBanner'] ?? 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1080&q=80',
  caps: localImages['capsAndApparel/caps/caps'] ?? localImages['capsAndApparel/caps'] ?? 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1080&q=80',
  toteBags: localImages['umbrellasAndBags/totebag/toteBags'] ?? localImages['umbrellasAndBags/totebag/toteBags'] ?? 'https://images.unsplash.com/photo-1523299337142-7e2b1f8d3098?auto=format&fit=crop&w=1080&q=80',
  businessCards: localImages['bundle/businesscard/businessCards'] ?? 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1080&q=80',
  plannersNotebooks: localImages['notebooksAndPens/planner/plannersNotebooks'] ?? 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1080&q=80',
  tShirts: localImages['capsAndApparel/shirt/tShirts'] ?? 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1080&q=80',
  jackets: localImages['capsAndApparel/jacket/jackets'] ?? 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1080&q=80',
  aprons: localImages['capsAndApparel/apron/aprons'] ?? 'https://images.unsplash.com/photo-1545235613-7c2f2b0fe8ca?auto=format&fit=crop&w=1080&q=80',
  tumblers: localImages['drinkware/tumbler/tumblers'] ?? 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1080&q=80',
  pens: localImages['notebooksAndPens/pen/pens'] ?? 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1080&q=80',
};

type SearchEntry = {
  title: string;
  page: string;
  pageLabel: string;
  item: {
    title: string;
    subtitle: string;
    image: string;
    colors?: string[];
    colorOptions?: { name: string; hex: string; image: string }[];
  };
};

const capItems = [
  {
    title: 'Cotton Cap',
    subtitle: 'Clean front panel with a bold brim.',
    image: localImages['capsAndApparel/caps/cotton gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/cotton gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/cotton black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/cotton blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/cotton green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/cotton maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/cotton pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/cotton red'] ?? cardImages.caps },
      { name: 'White', hex: '#f8f9fa', image: localImages['capsAndApparel/caps/cotton white'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/cotton yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Trucker Cap 1-tone',
    subtitle: 'Soft crown and relaxed styling.',
    image: localImages['capsAndApparel/caps/trucker1 gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/trucker1 gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/trucker1 black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/trucker1 blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/trucker1 green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/trucker1 maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/trucker1 pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/trucker1 red'] ?? cardImages.caps },
      { name: 'White', hex: '#f8f9fa', image: localImages['capsAndApparel/caps/trucker1 white'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/trucker1 yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Trucker Cap 2-tone',
    subtitle: 'Soft crown and relaxed styling.',
    image: localImages['capsAndApparel/caps/trucker2 gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/trucker2 gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/trucker2 black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/trucker2 blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/trucker2 green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/trucker2 maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/trucker2 pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/trucker2 red'] ?? cardImages.caps },
      { name: 'Violet', hex: '#ee82ee', image: localImages['capsAndApparel/caps/trucker2 violet'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/trucker2 yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Corduroy Cap',
    subtitle: 'Low-profile with a sleek silhouette.',
    image: localImages['capsAndApparel/caps/corduroy gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/corduroy gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/corduroy black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/corduroy blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/corduroy green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/corduroy maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/corduroy pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/corduroy red'] ?? cardImages.caps },
      { name: 'White', hex: '#f8f9fa', image: localImages['capsAndApparel/caps/corduroy white'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/corduroy yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Acid-washed Cap',
    subtitle: 'Soft crown and relaxed styling.',
    image: localImages['capsAndApparel/caps/half acid gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/half acid gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/half acid black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/half acid blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/half acid green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/half acid maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/half acid pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/half acid red'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/half acid yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Cotton Bucket Hat',
    subtitle: 'Sporty style built for the course.',
    image: localImages['capsAndApparel/caps/cottonb gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/cottonb gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/cottonb black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/cottonb blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/cottonb green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/cottonb maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/cottonb pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/cottonb red'] ?? cardImages.caps },
      { name: 'White', hex: '#f8f9fa', image: localImages['capsAndApparel/caps/cottonb white'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/cottonb yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Acid-washed Bucket Hat',
    subtitle: 'Adjustable fit with classic appeal.',
    image: localImages['capsAndApparel/caps/acid wb gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/acid wb gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/acid wb black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/acid wb blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/acid wb green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/acid wb maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/acid wb pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/acid wb red'] ?? cardImages.caps },
      { name: 'Violet', hex: '#ee82ee', image: localImages['capsAndApparel/caps/acid wb violet'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/acid wb yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Corduroy Bucket Hat',
    subtitle: 'Custom detail with premium stitching.',
    image: localImages['capsAndApparel/caps/cb gray'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/cb gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/cb black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/cb blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/cb green'] ?? cardImages.caps },
      { name: 'Maroon', hex: '#800000', image: localImages['capsAndApparel/caps/cb maroon'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/cb pink'] ?? cardImages.caps },
      { name: 'Red', hex: '#d00000', image: localImages['capsAndApparel/caps/cb red'] ?? cardImages.caps },
      { name: 'White', hex: '#f8f9fa', image: localImages['capsAndApparel/caps/cb white'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/cb yellow'] ?? cardImages.caps },
    ],
  },
  {
    title: 'Golf Cap',
    subtitle: 'Custom detail with premium stitching.',
    image: localImages['capsAndApparel/caps/gcap black'] ?? cardImages.caps,
    colorOptions: [
      { name: 'Gray', hex: '#9e9e9e', image: localImages['capsAndApparel/caps/gcap gray'] ?? cardImages.caps },
      { name: 'Black', hex: '#000000', image: localImages['capsAndApparel/caps/gcap black'] ?? cardImages.caps },
      { name: 'Blue', hex: '#243c8e', image: localImages['capsAndApparel/caps/gcap blue'] ?? cardImages.caps },
      { name: 'Green', hex: '#1f7f3d', image: localImages['capsAndApparel/caps/gcap green'] ?? cardImages.caps },
      { name: 'Navy Blue', hex: '#000080', image: localImages['capsAndApparel/caps/gcap navy blue'] ?? cardImages.caps },
      { name: 'Pink', hex: '#ff69b4', image: localImages['capsAndApparel/caps/gcap pink'] ?? cardImages.caps },
      { name: 'Orange', hex: '#ffa500', image: localImages['capsAndApparel/caps/gcap orange'] ?? cardImages.caps },
      { name: 'White', hex: '#f8f9fa', image: localImages['capsAndApparel/caps/gcap white'] ?? cardImages.caps },
      { name: 'Yellow', hex: '#ffd700', image: localImages['capsAndApparel/caps/gcap yellow'] ?? cardImages.caps },
      { name: 'Violet', hex: '#8A2BE2', image: localImages['capsAndApparel/caps/gcap violet'] ?? cardImages.caps },
    ],
  },
];

const toteBagItems = [
  { title: 'Combi Tote Bag w/ Inside Pocket', subtitle: 'Durable and eco-friendly.', image: cardImages.toteBags, colors: ['#000000', '#FFFFFF', '#8B4513'] },
  { title: 'Combi Tote Bag w/ Outside Pocket', subtitle: 'Durable and eco-friendly.', image: cardImages.toteBags, colors: ['#000000', '#FFFFFF', '#8B4513'] },
  { title: 'Combi Tote Bag w/ both Inside and Outside Pockets', subtitle: 'Durable and eco-friendly.', image: cardImages.toteBags, colors: ['#000000', '#FFFFFF', '#8B4513'] },
  { title: 'Solid Tote Bag w/ Inside Pocket', subtitle: 'Keep your items cool.', image: cardImages.toteBags, colors: ['#000080', '#FFFFFF', '#228B22'] },
  { title: 'Solid Tote Bag w/ Outside Pocket', subtitle: 'Keep your items cool.', image: cardImages.toteBags, colors: ['#000080', '#FFFFFF', '#228B22'] },
  { title: 'Solid Tote Bag w/ both Inside and Outside Pockets', subtitle: 'Durable and eco-friendly.', image: cardImages.toteBags, colors: ['#000000', '#FFFFFF', '#8B4513'] },
  { title: 'Flat Tote Bag', subtitle: 'Compact and convenient.', image: cardImages.toteBags, colors: ['#FF4500', '#000000', '#FFD700'] },
];

const shirtItems = [
  { title: 'Classic Crew Shirt', subtitle: 'Everyday comfort with custom print.', image: cardImages.tShirts, colors: ['#000000', '#FFFFFF', '#d63384'] },
  { title: 'Graphic Tee', subtitle: 'Art-forward style for any event.', image: cardImages.tShirts, colors: ['#343a40', '#FFFFFF', '#0d6efd'] },
  { title: 'Performance Shirt', subtitle: 'Lightweight fabric for active use.', image: cardImages.tShirts, colors: ['#198754', '#FFFFFF', '#6f42c1'] },
  { title: 'Long Sleeve Shirt', subtitle: 'Clean lines and comfortable fit.', image: cardImages.tShirts, colors: ['#000000', '#adb5bd', '#ffc107'] },
];

const cardItems = [
  { title: 'A5 Flyers', subtitle: 'Professional A5 sized flyers.', image: cardImages.businessCards },
];

const flyerItems = [
  { title: 'Calling Cards', subtitle: 'Custom calling cards.', image: cardImages.businessCards },
];

const plannerItems = [
  { title: 'Weekly Planner', subtitle: 'Keep your schedule organized.', image: cardImages.plannersNotebooks },
  { title: 'Monthly Planner', subtitle: 'Plan goals and deadlines with ease.', image: cardImages.plannersNotebooks },
  { title: 'Daily Planner', subtitle: 'Track tasks and priorities every day.', image: cardImages.plannersNotebooks },
];

const notebookItems = [
  { title: 'A5 Moleskin Notebook (100 leaves)', subtitle: 'Premium moleskin notebook.', image: cardImages.plannersNotebooks },
  { title: 'A5 Moleskin Notebook (80 leaves)', subtitle: 'Compact moleskin notebook.', image: cardImages.plannersNotebooks },
  { title: 'A5 Notebook w/ Pen', subtitle: 'Notebook with included pen.', image: cardImages.plannersNotebooks },
  { title: 'Pocket Notebook', subtitle: 'Small portable notebook.', image: cardImages.plannersNotebooks },
  { title: 'A5 Notebook Ruled Pages', subtitle: 'Ruled pages for organized notes.', image: cardImages.plannersNotebooks },
  { title: '50-sheet Notepad (5.5 x 4 inches)', subtitle: 'Small notepad for quick notes.', image: cardImages.plannersNotebooks },
];

const penItems = [
  { title: 'Bamboo Ballpen', subtitle: 'Eco-friendly bamboo pen.', image: cardImages.pens },
  { title: 'Golf Pen w/ Case', subtitle: 'Golf-themed pen with case.', image: cardImages.pens },
  { title: 'Silver Plastic Ballpen', subtitle: 'Classic silver plastic pen.', image: cardImages.pens },
  { title: 'Retractable Metal Ballpen', subtitle: 'Retractable metal pen.', image: cardImages.pens },
  { title: 'Plastic Ballpen w/ Stylus', subtitle: 'Pen with stylus for touchscreens.', image: cardImages.pens },
  { title: 'Gold Metal Ballpen', subtitle: 'Elegant gold metal pen.', image: cardImages.pens },
  { title: 'Plastic Pen w/ Sleeves', subtitle: 'Pen with protective sleeves.', image: cardImages.pens },
  { title: 'Sign Pen w/ Case', subtitle: 'Signature pen with case.', image: cardImages.pens },
  { title: 'Bamboo Pen w/ Case', subtitle: 'Bamboo pen with case.', image: cardImages.pens },
  { title: 'Desk Pen', subtitle: 'Professional desk pen.', image: cardImages.pens },
  { title: 'Phone Stand', subtitle: 'Convenient phone stand.', image: cardImages.pens },
];

const tumblerItems = [
  { title: '150mL Pocket Thermos', subtitle: 'Compact thermos for on-the-go.', image: cardImages.tumblers },
  { title: '250mL Pocket Thermos', subtitle: 'Portable thermos for daily use.', image: cardImages.tumblers },
  { title: '500mL Vacuum Flask Set', subtitle: 'Insulated flask set for hot drinks.', image: cardImages.tumblers },
  { title: '500mL Tyeso w/ Flat Top', subtitle: 'Stylish thermos with flat lid.', image: cardImages.tumblers },
  { title: '530mL Tyeso w/ Lock', subtitle: 'Secure thermos with locking lid.', image: cardImages.tumblers },
  { title: '750mL Tyeso w/ Nozzle', subtitle: 'Thermos with convenient nozzle.', image: cardImages.tumblers },
  { title: '750mL Tyeso w/ Lock', subtitle: 'Large thermos with secure lock.', image: cardImages.tumblers },
  { title: '750mL Tyeso Bowling', subtitle: 'Fun bowling-themed thermos.', image: cardImages.tumblers },
  { title: '350mL Mini Cup', subtitle: 'Small cup for quick drinks.', image: cardImages.tumblers },
  { title: '350mL Stainless Mug', subtitle: 'Durable stainless steel mug.', image: cardImages.tumblers },
  { title: '350mL Egg Mug', subtitle: 'Unique egg-shaped mug.', image: cardImages.tumblers },
  { title: '350mL Wooden Mug', subtitle: 'Eco-friendly wooden mug.', image: cardImages.tumblers },
  { title: 'Beer Mug', subtitle: 'Classic beer mug design.', image: cardImages.tumblers },
  { title: 'Ceramic Mugs', subtitle: 'Elegant ceramic mug collection.', image: cardImages.tumblers },
  { title: '600mL STR w/ Handle', subtitle: 'Straight thermos with handle.', image: cardImages.tumblers },
  { title: '900mL STR w/ Handle', subtitle: 'Large straight thermos.', image: cardImages.tumblers },
  { title: '1200mL STR Tumbler', subtitle: 'Extra large tumbler option.', image: cardImages.tumblers },
  { title: '600mL Frosted Plastic Tumbler', subtitle: 'Frosted plastic for cool drinks.', image: cardImages.tumblers },
  { title: '600mL Tumbler', subtitle: 'Standard tumbler size.', image: cardImages.tumblers },
  { title: 'Wooden Tumbler', subtitle: 'Natural wooden tumbler.', image: cardImages.tumblers },
  { title: '8oz Hip Flask', subtitle: 'Compact hip flask.', image: cardImages.tumblers },
  { title: '8oz Hip Flask Set', subtitle: 'Hip flask with accessories.', image: cardImages.tumblers },
  { title: 'Hip Flask Set', subtitle: 'Complete hip flask collection.', image: cardImages.tumblers },
];

const umbrellaItems = [
  { title: 'Foldable Umbrella', subtitle: 'Compact and portable umbrella.', image: cardImages.toteBags },
  { title: 'Two-Fold Umbrella', subtitle: 'Double-fold umbrella for easy storage.', image: cardImages.toteBags },
  { title: 'Golf Umbrella', subtitle: 'Large golf umbrella for outdoor use.', image: cardImages.toteBags },
  { title: 'Drawstring Bag', subtitle: 'Convenient drawstring bag.', image: cardImages.toteBags },
  { title: 'Duffle Bag', subtitle: 'Spacious duffle bag for travel.', image: cardImages.toteBags },
];

const kitchenwareItems = [
  { title: 'Cutlery Set w/ Case', subtitle: 'Complete cutlery set with protective case.', image: cardImages.businessCards },
  { title: 'Cutlery Set w/ Canvas Pouch', subtitle: 'Cutlery set with canvas storage pouch.', image: cardImages.businessCards },
  { title: 'Wooden Utensils w/ Canvas Pouch', subtitle: 'Wooden utensils with canvas pouch.', image: cardImages.businessCards },
  { title: 'Cheese Board Set', subtitle: 'Elegant cheese board with accessories.', image: cardImages.businessCards },
  { title: 'Cheese Knives Set w/ Box', subtitle: 'Specialized cheese knives in a box.', image: cardImages.businessCards },
  { title: '5-Piece Coaster Set', subtitle: 'Set of 5 decorative coasters.', image: cardImages.businessCards },
  { title: 'Wooden Lunchbox', subtitle: 'Natural wooden lunch container.', image: cardImages.businessCards },
  { title: 'Keychain Bottle Opener', subtitle: 'Convenient keychain bottle opener.', image: cardImages.businessCards },
  { title: 'Wooden Bottle Opener', subtitle: 'Sturdy wooden bottle opener.', image: cardImages.businessCards },
];

const apronItems = [
  { title: 'Kitchen Apron', subtitle: 'Durable cotton apron with custom print.', image: cardImages.aprons },
  { title: 'Barista Apron', subtitle: 'Professional apron for café staff.', image: cardImages.aprons },
  { title: 'Chef Apron', subtitle: 'Premium apron for culinary professionals.', image: cardImages.aprons },
];

const hoodieItems = [
  { title: 'Classic Hoodie', subtitle: 'Comfortable and customizable.', image: cardImages.tShirts },
  { title: 'Performance Hoodie', subtitle: 'Lightweight fabric for active use.', image: cardImages.tShirts },
  { title: 'Zip-up Hoodie', subtitle: 'Easy-wear with custom embroidery.', image: cardImages.tShirts },
];

const jacketItems = [
  { title: 'Windbreaker Jacket', subtitle: 'Lightweight protection from the elements.', image: cardImages.jackets },
  { title: 'Bomber Jacket', subtitle: 'Stylish and comfortable outerwear.', image: cardImages.jackets },
  { title: 'Custom Jacket', subtitle: 'Premium fabric with custom design.', image: cardImages.jackets },
];

const accessoryItems = [
  { title: 'Wooden Mirror', subtitle: 'Elegant wooden mirror.', image: cardImages.businessCards },
  { title: 'Compact Mirror', subtitle: 'Portable compact mirror.', image: cardImages.businessCards },
  { title: 'Wooden Hairbrush', subtitle: 'Natural wooden hairbrush.', image: cardImages.businessCards },
  { title: 'Wooden Comb', subtitle: 'Sturdy wooden comb.', image: cardImages.businessCards },
  { title: 'Wooden USB Flash Drive with Case (8GB)', subtitle: 'Wooden USB drive with case.', image: cardImages.businessCards },
  { title: 'USB Flash Drive with Metal Case (8GB)', subtitle: 'Metal cased USB drive.', image: cardImages.businessCards },
  { title: 'Mini Portable Fan', subtitle: 'Compact portable fan.', image: cardImages.businessCards },
  { title: 'Leather Mouse Pad', subtitle: 'Premium leather mouse pad.', image: cardImages.businessCards },
  { title: 'Wooden Lamp', subtitle: 'Decorative wooden lamp.', image: cardImages.businessCards },
  { title: 'Wooden Keychain', subtitle: 'Wooden keychain accessory.', image: cardImages.businessCards },
  { title: 'Wooden Clock', subtitle: 'Functional wooden clock.', image: cardImages.businessCards },
  { title: 'Foldable Fans', subtitle: 'Portable foldable fans.', image: cardImages.businessCards },
  { title: 'Wooden Fan', subtitle: 'Elegant wooden fan.', image: cardImages.businessCards },
  { title: 'Paper Fans', subtitle: 'Traditional paper fans.', image: cardImages.businessCards },
  { title: 'Chess Board w/ Wine Accessories', subtitle: 'Chess board with wine set.', image: cardImages.businessCards },
  { title: 'Canvas Pouch (8.5 x 3.5 inches)', subtitle: 'Canvas storage pouch.', image: cardImages.businessCards },
  { title: 'PVC Bag Tag', subtitle: 'Durable PVC bag tag.', image: cardImages.businessCards },
  { title: 'Acrylic Name Plate', subtitle: 'Professional acrylic name plate.', image: cardImages.businessCards },
  { title: 'Lanyard (1 inch or 3/4 inch)', subtitle: 'Adjustable lanyard options.', image: cardImages.businessCards },
  { title: 'Short Lanyard w/ Carabiner', subtitle: 'Short lanyard with carabiner.', image: cardImages.businessCards },
  { title: 'Button Pins', subtitle: 'Custom button pins.', image: cardImages.businessCards },
  { title: 'Card Holder', subtitle: 'Convenient card holder.', image: cardImages.businessCards },
];

const bannerItems = [
  { title: 'Customized Envelope', subtitle: 'Personalized envelopes.', image: cardImages.businessCards },
  { title: 'Roll-up Banner', subtitle: 'Portable roll-up banner.', image: cardImages.businessCards },
];

const sintaItems = [
  { title: 'Sintra Board', subtitle: 'Durable sintra board signage.', image: cardImages.businessCards },
];

const tarpaulinItems = [
  { title: 'Bundle w/ Box and Ribbon', subtitle: 'Complete bundle with packaging.', image: cardImages.businessCards },
  { title: 'Bundle Set', subtitle: 'Comprehensive bundle collection.', image: cardImages.businessCards },
];

// Merged category items
const drinkwareItems = [...tumblerItems];
const kitchenwareAllItems = [...kitchenwareItems];
const umbrellasAndBagsItems = [...umbrellaItems, ...toteBagItems];
const capsAndApparelItems = [...capItems, ...shirtItems, ...apronItems, ...hoodieItems, ...jacketItems];
const notebooksAndPensItems = [...notebookItems, ...penItems, ...plannerItems];
const accessoriesAllItems = [...accessoryItems];
const bundleItems = [...cardItems, ...flyerItems, ...bannerItems, ...sintaItems, ...tarpaulinItems];

const allSearchItems: SearchEntry[] = [
  ...drinkwareItems.map((item) => ({ title: item.title, page: 'drinkware', pageLabel: 'Drinkware', item })),
  ...kitchenwareAllItems.map((item) => ({ title: item.title, page: 'kitchenware', pageLabel: 'Kitchenware', item })),
  ...umbrellasAndBagsItems.map((item) => ({ title: item.title, page: 'umbrellasAndBags', pageLabel: 'Umbrellas & Bags', item })),
  ...capsAndApparelItems.map((item) => ({ title: item.title, page: 'capsAndApparel', pageLabel: 'Caps & Apparel', item })),
  ...notebooksAndPensItems.map((item) => ({ title: item.title, page: 'notebooksAndPens', pageLabel: 'Notebooks & Pens', item })),
  ...accessoriesAllItems.map((item) => ({ title: item.title, page: 'accessories', pageLabel: 'Accessories', item })),
  ...bundleItems.map((item) => ({ title: item.title, page: 'bundle', pageLabel: 'Bundle', item })),
];

export default function App() {
  const [page, setPage] = useState<string>(() => window.location.hash.slice(1) || 'home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSelectedItemTitle, setSearchSelectedItemTitle] = useState('');

  useEffect(() => {
    const updatePage = () => setPage(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  useEffect(() => {
    if (searchSelectedItemTitle) {
      setSearchSelectedItemTitle('');
    }
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [page]);

  const openSearch = () => {
    setSearchOpen(true);
    setSearchTerm('');
  };

  const openInfoPage = () => {
    window.location.hash = '#info';
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const handleSearchSelect = (selected: { title: string; page: string }) => {
    setSearchOpen(false);
    setSearchTerm('');
    setSearchSelectedItemTitle(selected.title);
    window.location.hash = `#${selected.page}`;
  };

  const filteredSearchItems = searchTerm.trim()
    ? allSearchItems.filter((entry) => entry.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  const searchOverlay = searchOpen ? (
    <div
      className="position-fixed top-0 start-0 vw-100 vh-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-start p-3"
      style={{ zIndex: 1500, paddingTop: '70px' }}
      onClick={closeSearch}
    >
      <div
        className="card shadow-sm w-100"
        style={{ maxWidth: '680px' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="card-body">
          <div className="d-flex gap-2 align-items-center mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Search item name..."
              value={searchTerm}
              autoFocus
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && filteredSearchItems.length > 0) {
                  handleSearchSelect(filteredSearchItems[0]);
                }
              }}
            />
            <button type="button" className="btn btn-outline-secondary" onClick={closeSearch} aria-label="Close search">
              ×
            </button>
          </div>
          <div className="list-group">
            {filteredSearchItems.length > 0 ? (
              filteredSearchItems.map((entry) => (
                <button
                  key={`${entry.page}-${entry.title}`}
                  type="button"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  onClick={() => handleSearchSelect(entry)}
                >
                  <div>
                    <div className="fw-bold">{entry.title}</div>
                    <small className="text-muted">{entry.pageLabel}</small>
                  </div>
                  <span className="badge bg-primary rounded-pill">Select</span>
                </button>
              ))
            ) : searchTerm.trim() ? (
              <div className="list-group-item text-muted">No items found for "{searchTerm}".</div>
            ) : (
              <div className="list-group-item text-muted">Type to search for a product name.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  let pageContent = <HomePage cardImages={cardImages} />;

  if (page === 'drinkware') {
    pageContent = <DrinkwarePage items={drinkwareItems} onBack={() => (window.location.hash = '#home')} initialSelectedItemTitle={searchSelectedItemTitle} />;
  } else if (page === 'kitchenware') {
    pageContent = <KitchenwarePage items={kitchenwareAllItems} onBack={() => (window.location.hash = '#home')} initialSelectedItemTitle={searchSelectedItemTitle} />;
  } else if (page === 'umbrellasAndBags') {
    pageContent = <UmbrellasAndBagsPage items={umbrellasAndBagsItems} onBack={() => (window.location.hash = '#home')} initialSelectedItemTitle={searchSelectedItemTitle} />;
  } else if (page === 'capsAndApparel') {
    pageContent = <CapsAndApparelPage items={capsAndApparelItems} onBack={() => (window.location.hash = '#home')} initialSelectedItemTitle={searchSelectedItemTitle} />;
  } else if (page === 'notebooksAndPens') {
    pageContent = <NotebooksAndPensPage items={notebooksAndPensItems} onBack={() => (window.location.hash = '#home')} initialSelectedItemTitle={searchSelectedItemTitle} />;
  } else if (page === 'accessories') {
    pageContent = <AccessoriesPage items={accessoriesAllItems} onBack={() => (window.location.hash = '#home')} initialSelectedItemTitle={searchSelectedItemTitle} />;
  } else if (page === 'bundle') {
    pageContent = <BundlePage items={bundleItems} onBack={() => (window.location.hash = '#home')} initialSelectedItemTitle={searchSelectedItemTitle} />;
  } else if (page === 'info') {
    pageContent = <InfoPage image={localImages['info eis'] ?? cardImages.eisBanner} />;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation onSearchOpen={openSearch} onPhoneClick={openInfoPage} />
      {searchOverlay}
      {pageContent}
    </div>
  );
}
