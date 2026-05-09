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

const imageFor = (path: string, fallback: string) => localImages[path] ?? fallback;


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

const categories = {
  drinkware: [
    {
      title: '150mL Pocket Thermos',
      subtitle: 'Compact thermos for on-the-go.',
      image: imageFor('drinkware/01 - 150mL Pocket Thermos', cardImages.tumblers),
    },
    {
      title: '250mL Pocket Thermos',
      subtitle: 'Portable thermos for daily use.',
      image: imageFor('drinkware/02 - 250mL Pocket Thermos', cardImages.tumblers),
    },
    {
      title: '350mL Mini Cup',
      subtitle: 'Small cup for quick drinks.',
      image: imageFor('drinkware/03 - 350mL Mini Cup', cardImages.tumblers),
    },
    {
      title: '350mL Stainless Mug',
      subtitle: 'Durable stainless steel mug.',
      image: imageFor('drinkware/04 - 350mL Stainless Mug', cardImages.tumblers),
    },
    {
      title: '350mL Egg Mug',
      subtitle: 'Unique egg-shaped mug.',
      image: imageFor('drinkware/05 - 350mL Egg Mug', cardImages.tumblers),
    },
    {
      title: '500mL Tyeso w/ Flat Top',
      subtitle: 'Stylish thermos with a flat lid.',
      image: imageFor('drinkware/06 - 500mL Tyeso w Flat Top', cardImages.tumblers),
    },
    {
      title: '500mL Vacuum Flask Set',
      subtitle: 'Insulated flask set for hot drinks.',
      image: imageFor('drinkware/07 - 500mL Vacuum Flask Set', cardImages.tumblers),
    },
    {
      title: '530mL Tyeso w/ Lock',
      subtitle: 'Secure thermos with locking lid.',
      image: imageFor('drinkware/08 - 530mL Tyeso w Lock', cardImages.tumblers),
    },
    {
      title: '750mL Tyeso w/ Lock',
      subtitle: 'Large thermos with secure lock.',
      image: imageFor('drinkware/09 - 750mL Tyeso w Lock', cardImages.tumblers),
    },
    {
      title: '750mL Tyeso w/ Nozzle',
      subtitle: 'Thermos with convenient nozzle.',
      image: imageFor('drinkware/10 - 750mL Tyeso w Nozzle', cardImages.tumblers),
    },
    {
      title: '750mL Tyeso Bowling',
      subtitle: 'Fun bowling-themed thermos.',
      image: imageFor('drinkware/11 - 750mL Tyeso Bowling', cardImages.tumblers),
    },
    {
      title: '600mL STR w/ Handle',
      subtitle: 'Straight thermos with handle.',
      image: imageFor('drinkware/12 - 600mL STR w Handle', cardImages.tumblers),
    },
    {
      title: '900mL STR w/ Handle',
      subtitle: 'Large straight thermos.',
      image: imageFor('drinkware/13 - 900mL STR w Handle', cardImages.tumblers),
    },
    {
      title: '1200mL STR Tumbler',
      subtitle: 'Extra large tumbler option.',
      image: imageFor('drinkware/14 - 1200mL STR Tumbler', cardImages.tumblers),
    },
    {
      title: '600mL Frosted Plastic Tumbler',
      subtitle: 'Frosted plastic for cool drinks.',
      image: imageFor('drinkware/15 - 600mL Frosted Plastic Tumbler', cardImages.tumblers),
    },
    {
      title: '8oz Hip Flask Set',
      subtitle: 'Hip flask set with accessories.',
      image: imageFor('drinkware/16 - 8oz Hip Flask Set', cardImages.tumblers),
    },
    {
      title: '8oz Hip Flask',
      subtitle: 'Compact hip flask.',
      image: imageFor('drinkware/17 - 8oz Hip Flask', cardImages.tumblers),
    },
    {
      title: 'Hip Flask Set',
      subtitle: 'Complete hip flask collection.',
      image: imageFor('drinkware/18 - Hip Flask Set', cardImages.tumblers),
    },
    {
      title: 'Beer Mug',
      subtitle: 'Classic beer mug design.',
      image: imageFor('drinkware/19 - Beer Mug', cardImages.tumblers),
    },
    {
      title: '600 mL Tumbler',
      subtitle: 'Standard tumbler size.',
      image: imageFor('drinkware/20 - 600 mL Tumbler', cardImages.tumblers),
    },
    {
      title: 'Wooden Tumbler',
      subtitle: 'Natural wooden tumbler.',
      image: imageFor('drinkware/21 - Wooden Tumbler', cardImages.tumblers),
    },
    {
      title: '350mL Wooden Mug',
      subtitle: 'Eco-friendly wooden mug.',
      image: imageFor('drinkware/22 - 350mL Wooden Mug', cardImages.tumblers),
    },
    {
      title: 'Ceramic Mugs',
      subtitle: 'Elegant ceramic mug collection.',
      image: imageFor('drinkware/23 - Ceramic Mugs', cardImages.tumblers),
    },
  ],
  kitchenware: [
    {
      title: 'Wooden Lunchbox',
      subtitle: 'Natural wooden lunchbox with secure lid.',
      image: imageFor('kitchenware/24 - Wooden Lunchbox', cardImages.businessCards),
    },
    {
      title: '5-Piece Coaster Set',
      subtitle: 'Set of five decorative coasters.',
      image: imageFor('kitchenware/25 - 5-Piece Coaster Set', cardImages.businessCards),
    },
    {
      title: 'Cheese Board Set',
      subtitle: 'Cheese board set with serving accessories.',
      image: imageFor('kitchenware/26 - Cheese Board Set', cardImages.businessCards),
    },
    {
      title: 'Cutlery Set w/ Case',
      subtitle: 'Portable cutlery set with protective case.',
      image: imageFor('kitchenware/27 - Cutlery Set w/ Case', cardImages.businessCards),
    },
    {
      title: 'Cutlery Set w/ Canvas Pouch',
      subtitle: 'Cutlery set with canvas storage pouch.',
      image: imageFor('kitchenware/28 - Cutlery Set w/ Canvas Pouch', cardImages.businessCards),
    },
    {
      title: 'Wooden Utensils with Canvas Pouch',
      subtitle: 'Reusable utensils with a canvas pouch.',
      image: imageFor('kitchenware/29 - Wooden Utensils with Canvas Pouch', cardImages.businessCards),
    },
    {
      title: 'Cheese Knives Set w/ Box',
      subtitle: 'Specialized cheese knives in a premium box.',
      image: imageFor('kitchenware/30 - Cheese Knives Set w/ Box', cardImages.businessCards),
    },
    {
      title: 'Keychain Bottle Opener',
      subtitle: 'Bottle opener attached to a handy keychain.',
      image: imageFor('kitchenware/31 - Keychain Bottle Opener', cardImages.businessCards),
    },
    {
      title: 'Wooden Bottle Opener',
      subtitle: 'Sturdy wooden bottle opener.',
      image: imageFor('kitchenware/32 - Wooden Bottle Opener', cardImages.businessCards),
    },
  ],
  umbrellas: [
    { title: 'Two Fold Umbrella', subtitle: 'Compact, two-fold umbrella for easy storage.', image: imageFor('umbrellasAndBags/33 - Two Fold Umbrella', cardImages.toteBags) },
    { title: 'Golf Umbrella', subtitle: 'Large golf umbrella for outdoor use.', image: imageFor('umbrellasAndBags/34 - Golf Umbrella', cardImages.toteBags) },
    { title: 'Foldable Umbrella', subtitle: 'Compact and portable umbrella.', image: imageFor('umbrellasAndBags/35 - Foldable Umbrella', cardImages.toteBags) },
  ],
  toteBags: [
    { title: 'Flat Canvas Tote Bag', subtitle: 'Durable canvas tote bag with wide handles.', image: imageFor('umbrellasAndBags/36 - Flat Canvas Tote Bag', cardImages.toteBags), colors: ['#000000', '#FFFFFF', '#8B4513'] },
    { title: 'Drawstring Bag', subtitle: 'Lightweight drawstring bag for easy carrying.', image: imageFor('umbrellasAndBags/37 - Drawstring Bag', cardImages.toteBags), colors: ['#000080', '#FFFFFF', '#228B22'] },
    { title: 'Customized Canvas Tote Bag', subtitle: 'Custom-printed canvas tote bag.', image: imageFor('umbrellasAndBags/38 - Customized Canvas Tote Bag', cardImages.toteBags), colors: ['#000000', '#FFFFFF', '#8B4513'] },
    { title: 'Customized Canvas Tote Bag (With pockets)', subtitle: 'Canvas tote bag with extra pocket storage.', image: imageFor('umbrellasAndBags/39 - Customized Canvas Tote Bag (With pockets)', cardImages.toteBags), colors: ['#FF4500', '#000000', '#FFD700'] },
    { title: 'Duffle Bag', subtitle: 'Spacious duffle bag for travel and events.', image: imageFor('umbrellasAndBags/40 - Duffle Bag', cardImages.toteBags), colors: ['#000000', '#FFFFFF', '#8B4513'] },
  ],
  caps: [
    {
      title: 'Acid Wash Cap',
      subtitle: 'Textured acid wash cap for a vintage look.',
      image: imageFor('capsAndApparel/caps/half acid black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/half acid black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/half acid blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/half acid gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/half acid green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/half acid maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/half acid pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/half acid red', cardImages.caps) },
        { name: 'Violet', hex: '#8A2BE2', image: imageFor('capsAndApparel/caps/acid wb violet', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/acid wb yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Acid Washed Bucket Hat',
      subtitle: 'Classic CB cap with versatile styling.',
      image: imageFor('capsAndApparel/caps/acid wb black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/acid wb black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/acid wb blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/acid wb gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/acid wb green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/acid wb maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/acid wb pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/acid wb red', cardImages.caps) },
        { name: 'White', hex: '#FFFFFF', image: imageFor('capsAndApparel/caps/acid wb white', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/acid wb yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Corduroy Cap',
      subtitle: 'Soft corduroy cap with premium texture.',
      image: imageFor('capsAndApparel/caps/corduroy black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/corduroy black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/corduroy blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/corduroy gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/corduroy green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/corduroy maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/corduroy pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/corduroy red', cardImages.caps) },
        { name: 'White', hex: '#FFFFFF', image: imageFor('capsAndApparel/caps/corduroy white', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/corduroy yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Cotton Cap',
      subtitle: 'Clean cotton cap for everyday wear.',
      image: imageFor('capsAndApparel/caps/cotton black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/cotton black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/cotton blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/cotton gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/cotton green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/cotton maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/cotton pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/cotton red', cardImages.caps) },
        { name: 'White', hex: '#FFFFFF', image: imageFor('capsAndApparel/caps/cotton white', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/cotton yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Corduroy Bucket Hat',
      subtitle: 'Classic G cap with bold styling.',
      image: imageFor('capsAndApparel/caps/cb black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/cb black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/cb navy blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/cb gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/cb green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/cb maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/cb pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/cb red', cardImages.caps) },
        { name: 'White', hex: '#FFFFFF', image: imageFor('capsAndApparel/caps/cb white', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/cb yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Golf Cap',
      subtitle: 'Half acid cap with unique design.',
      image: imageFor('capsAndApparel/caps/gcap black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/gcap black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/gcap blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/gcap gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/gcap green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/gcap maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/gcap pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/gcap red', cardImages.caps) },
        { name: 'White', hex: '#FFFFFF', image: imageFor('capsAndApparel/caps/gcap white', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/gcap yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Trucker Cap 1-Tone',
      subtitle: 'Breathable trucker cap with mesh back.',
      image: imageFor('capsAndApparel/caps/trucker1 black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/trucker1 black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/trucker1 blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/trucker1 gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/trucker1 green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/trucker1 maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/trucker1 pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/trucker1 red', cardImages.caps) },
        { name: 'White', hex: '#FFFFFF', image: imageFor('capsAndApparel/caps/trucker1 white', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/trucker1 yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Trucker Cap 2-Tone',
      subtitle: 'Structured trucker cap with snapback.',
      image: imageFor('capsAndApparel/caps/trucker2 black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/trucker2 black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/trucker2 blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/trucker2 gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/trucker2 green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/trucker2 maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/trucker2 pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/trucker2 red', cardImages.caps) },
        { name: 'Violet', hex: '#8A2BE2', image: imageFor('capsAndApparel/caps/trucker2 violet', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/trucker2 yellow', cardImages.caps) },
      ],
    },
    {
      title: 'Cotton Bucket Hat',
      subtitle: 'Cotton bucket hat with solid construction.',
      image: imageFor('capsAndApparel/caps/cottonb black', cardImages.caps),
      colorOptions: [
        { name: 'Black', hex: '#000000', image: imageFor('capsAndApparel/caps/cottonb black', cardImages.caps) },
        { name: 'Blue', hex: '#0000FF', image: imageFor('capsAndApparel/caps/cottonb blue', cardImages.caps) },
        { name: 'Gray', hex: '#808080', image: imageFor('capsAndApparel/caps/cottonb gray', cardImages.caps) },
        { name: 'Green', hex: '#008000', image: imageFor('capsAndApparel/caps/cottonb green', cardImages.caps) },
        { name: 'Maroon', hex: '#800000', image: imageFor('capsAndApparel/caps/cottonb maroon', cardImages.caps) },
        { name: 'Pink', hex: '#FFC0CB', image: imageFor('capsAndApparel/caps/cottonb pink', cardImages.caps) },
        { name: 'Red', hex: '#FF0000', image: imageFor('capsAndApparel/caps/cottonb red', cardImages.caps) },
        { name: 'White', hex: '#FFFFFF', image: imageFor('capsAndApparel/caps/cottonb white', cardImages.caps) },
        { name: 'Yellow', hex: '#FFFF00', image: imageFor('capsAndApparel/caps/cottonb yellow', cardImages.caps) },
      ],
    },
  ],
  shirts: [
    {
      title: 'Round Neck Shirt',
      subtitle: 'Classic round neck shirt for everyday wear.',
      image: imageFor('capsAndApparel/41 - Round Neck Shirt', cardImages.tShirts),
    },
    {
      title: 'Roundneck Dri-fit Shirt',
      subtitle: 'Breathable dri-fit shirt for active use.',
      image: imageFor('capsAndApparel/42 - Roundneck Dri-fit Shirt', cardImages.tShirts),
    },
    {
      title: 'Honeycomb Polo Shirt',
      subtitle: 'Smart polo shirt with honeycomb texture.',
      image: imageFor('capsAndApparel/44 - Honeycomb Polo Shirt', cardImages.tShirts),
    },
  ],
  aprons: [
    {
      title: 'Customized Apron',
      subtitle: 'Durable custom apron for kitchen or catering staff.',
      image: imageFor('capsAndApparel/43 - Customized Apron', cardImages.aprons),
    },
  ],
  hoodies: [
    {
      title: 'Hoodies',
      subtitle: 'Cozy hoodies with custom branding options.',
      image: imageFor('capsAndApparel/46 - Hoodies', cardImages.tShirts),
    },
  ],
  jackets: [
    {
      title: 'Corporate Jacket',
      subtitle: 'Professional jacket suitable for corporate uniforms.',
      image: imageFor('capsAndApparel/45 - Corporate Jacket', cardImages.jackets),
    },
  ],
  notebooks: [
    {
      title: 'A5 Moleskin Notebook (100 leaves)',
      subtitle: 'Premium moleskin notebook.',
      image: imageFor('notebooksAndPens/47 - A5 Moleskin Notebook (100 leaves)', cardImages.plannersNotebooks),
    },
    {
      title: 'A5 Moleskin Notebook (150 leaves)',
      subtitle: 'Extended notebook with 150 leaves.',
      image: imageFor('notebooksAndPens/48 - A5 Moleskin Notebook (150 leaves)', cardImages.plannersNotebooks),
    },
    {
      title: 'A5 Notebook w/ Pen',
      subtitle: 'Notebook with included pen.',
      image: imageFor('notebooksAndPens/57 - A5 Notebook w Pen', cardImages.plannersNotebooks),
    },
    {
      title: 'Phone Stand',
      subtitle: 'Convenient phone stand.',
      image: imageFor('notebooksAndPens/58 - Phone Stand', cardImages.plannersNotebooks),
    },
    {
      title: 'Pocket Notebook',
      subtitle: 'Small portable notebook.',
      image: imageFor('notebooksAndPens/60 - Pocket Notebook', cardImages.plannersNotebooks),
    },
  ],
  pens: [
    {
      title: 'Bamboo Ballpen',
      subtitle: 'Eco-friendly bamboo pen.',
      image: imageFor('notebooksAndPens/49 - Bamboo Ballpen', cardImages.pens),
    },
    {
      title: 'Golf Pen w/ Case',
      subtitle: 'Golf-themed pen with case.',
      image: imageFor('notebooksAndPens/50 - Golf Pen w Case', cardImages.pens),
    },
    {
      title: 'Silver Plastic Ballpen',
      subtitle: 'Classic silver plastic pen.',
      image: imageFor('notebooksAndPens/51 - Silver Plastic Ballpen', cardImages.pens),
    },
    {
      title: 'Retractable Metal Ballpen',
      subtitle: 'Retractable metal pen.',
      image: imageFor('notebooksAndPens/52 - Retractable Metal Ballpen', cardImages.pens),
    },
    {
      title: 'Plastic Ballpen w/ Stylus',
      subtitle: 'Pen with stylus for touchscreens.',
      image: imageFor('notebooksAndPens/53 - Plastic Ballpen w Stylus', cardImages.pens),
    },
    {
      title: 'Gold Metal Ballpen',
      subtitle: 'Elegant gold metal pen.',
      image: imageFor('notebooksAndPens/54 - Gold Metal Ballpen', cardImages.pens),
    },
    {
      title: 'Plastic Pen w/ Sleeve',
      subtitle: 'Pen with protective sleeve.',
      image: imageFor('notebooksAndPens/55 - Plastic Pen w Sleeve', cardImages.pens),
    },
    {
      title: 'Sign Pen w/ Case',
      subtitle: 'Signature pen with case.',
      image: imageFor('notebooksAndPens/56 - Sign Pen w Case', cardImages.pens),
    },
    {
      title: 'Bamboo Pen w/ Case',
      subtitle: 'Bamboo pen with case.',
      image: imageFor('notebooksAndPens/59 - Bamboo Pen w Case', cardImages.pens),
    },
    {
      title: 'Desk Pen',
      subtitle: 'Professional desk pen.',
      image: imageFor('notebooksAndPens/61 - Desk Pen', cardImages.pens),
    },
  ],
  planners: [],
  accessories: [
    {
      title: 'Wooden Mirror',
      subtitle: 'Elegant wooden mirror.',
      image: imageFor('accessories/62 - Wooden Mirror', cardImages.businessCards),
    },
    {
      title: 'Wooden Lamp',
      subtitle: 'Decorative wooden lamp.',
      image: imageFor('accessories/63 - Wooden Lamp', cardImages.businessCards),
    },
    {
      title: 'Wooden Keychain',
      subtitle: 'Wooden keychain accessory.',
      image: imageFor('accessories/64 - Wooden Keychain', cardImages.businessCards),
    },
    {
      title: 'Wooden Clock',
      subtitle: 'Functional wooden clock.',
      image: imageFor('accessories/65 - Wooden Clock', cardImages.businessCards),
    },
    {
      title: 'Wooden Hairbrush',
      subtitle: 'Natural wooden hairbrush.',
      image: imageFor('accessories/66 - Wooden Hairbrush', cardImages.businessCards),
    },
    {
      title: 'Wooden Comb',
      subtitle: 'Sturdy wooden comb.',
      image: imageFor('accessories/67 - Wooden Comb', cardImages.businessCards),
    },
    {
      title: 'Wooden USB Flash drive with Case (8GB)',
      subtitle: 'Wooden USB drive with case.',
      image: imageFor('accessories/68 - Wooden USB Flash drive with Case (8GB)', cardImages.businessCards),
    },
    {
      title: 'USB Flash drive with Metal Case (8GB)',
      subtitle: 'Metal-cased USB drive.',
      image: imageFor('accessories/69 - USB Flash drive with Metal Case (8GB)', cardImages.businessCards),
    },
    {
      title: 'Compact Mirror',
      subtitle: 'Portable compact mirror.',
      image: imageFor('accessories/70 - Compact Mirror', cardImages.businessCards),
    },
    {
      title: 'Foldable Fans',
      subtitle: 'Portable foldable fans.',
      image: imageFor('accessories/71 - Foldable Fans', cardImages.businessCards),
    },
    {
      title: 'Chess Board w/ Wine Accessories',
      subtitle: 'Chess board with wine accessories.',
      image: imageFor('accessories/72 - Chess Board w Wine Accessories', cardImages.businessCards),
    },
    {
      title: 'Mini Portable Fans',
      subtitle: 'Compact portable fans.',
      image: imageFor('accessories/73 - Mini Portable Fans', cardImages.businessCards),
    },
    {
      title: '8.5 x 3.5 inches Canvas Pouch',
      subtitle: 'Canvas pouch for small essentials.',
      image: imageFor('accessories/74 - 8.5 x 3.5 inches Canvas Pouch', cardImages.businessCards),
    },
    {
      title: 'PVC Bag Tag',
      subtitle: 'Durable PVC bag tag.',
      image: imageFor('accessories/75 - PVC Bag Tag', cardImages.businessCards),
    },
    {
      title: 'Acrylic Name Plate',
      subtitle: 'Professional acrylic name plate.',
      image: imageFor('accessories/76 - Acrylic Name Plate', cardImages.businessCards),
    },
    {
      title: 'Lanyard',
      subtitle: 'Custom lanyard for ID cards and badges.',
      image: imageFor('accessories/77 - Lanyard', cardImages.businessCards),
    },
    {
      title: 'Leather Mouse Pad',
      subtitle: 'Premium leather mouse pad.',
      image: imageFor('accessories/78 - Leather Mouse Pad', cardImages.businessCards),
    },
    {
      title: 'Button Pins',
      subtitle: 'Custom button pins.',
      image: imageFor('accessories/79 - Button Pins', cardImages.businessCards),
    },
    {
      title: 'Card Holder',
      subtitle: 'Convenient card holder.',
      image: imageFor('accessories/80 - Card Holder', cardImages.businessCards),
    },
    {
      title: 'Short Lanyard w/ Carabiner',
      subtitle: 'Short lanyard with a carabiner clip.',
      image: imageFor('accessories/81 - Short Lanyard w Carabiner', cardImages.businessCards),
    },
    {
      title: 'Wooden Fan',
      subtitle: 'Elegant wooden fan.',
      image: imageFor('accessories/82 - Wooden Fan', cardImages.businessCards),
    },
  ],
  cards: [
    {
      title: 'Paper Fans',
      subtitle: 'Paper Fans with custom designs.',
      image: imageFor('bundle/92 - Paper Fans', cardImages.businessCards),
    },
  ],
  flyers: [
    {
      title: 'Bundle with Box and Ribbon',
      subtitle: 'Custom Bundle with Box and Ribbon.',
      image: imageFor('bundle/89 - Customized Envelope', cardImages.businessCards),
    },
  ],
  banners: [
    {
      title: '50-sheet Notepad',
      subtitle: 'Compact notepad for quick notes.',
      image: imageFor('bundle/86 - 50-sheet Notepad', cardImages.businessCards),
    },
    {
      title: 'Roll-up Banner',
      subtitle: 'Portable roll-up banner.',
      image: imageFor('bundle/87 - Roll-up Banner', cardImages.businessCards),
    },
  ],
  sinta: [
    {
      title: 'Sintra Board',
      subtitle: 'Durable sintra board signage.',
      image: imageFor('bundle/88 - Sintra Board', cardImages.businessCards),
    },
    {
      title: 'Customized Envelope',
      subtitle: 'Personalized envelopes.',
      image: imageFor('bundle/90 - Bundle with Box and Ribbon', cardImages.businessCards),
    },
        {
      title: 'Bundle Set',
      subtitle: 'Custom Bundle Set for gift giving.',
      image: imageFor('bundle/91 - Bundle Set', cardImages.businessCards),
    },
  ],
  tarpaulin: [
    {
      title: 'A5 Notebooks (Ruled Pages)',
      subtitle: 'Notebooks  for Writing.',
      image: imageFor('bundle/83 - A5 Notebook (Ruled Pages)', cardImages.businessCards),
    },
    {
      title: 'A5 Flyers',
      subtitle: 'Custom flyers for promotion.',
      image: imageFor('bundle/84 - A5 Flyers', cardImages.businessCards),
    },
    {
      title: 'Business Cards',
      subtitle: 'Custom business cards for various uses.',
      image: imageFor('bundle/85 - Business Cards', cardImages.businessCards),
    },
  ],
};







































// Merged category items
const drinkwareItems = categories.drinkware;
const kitchenwareAllItems = categories.kitchenware;
const umbrellasAndBagsItems = [...categories.umbrellas, ...categories.toteBags];
const capsAndApparelItems = [...categories.caps, ...categories.shirts, ...categories.aprons, ...categories.hoodies, ...categories.jackets];
const notebooksAndPensItems = [...categories.notebooks, ...categories.pens, ...categories.planners];
const accessoriesAllItems = categories.accessories;
const bundleItems = [...categories.cards, ...categories.flyers, ...categories.banners, ...categories.sinta, ...categories.tarpaulin];

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
