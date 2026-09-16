import type { Product } from '../components/ProductCard';

export const products: Product[] = [
  {
    id: '1',
    name: 'Aarav Lounge Sofa',
    description: 'A masterpiece of comfort featuring natural linen and a solid teak wood frame. The Aarav Lounge Sofa brings relaxed elegance to any living room, designed with deep seating and plush cushions for ultimate relaxation.',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    hoverImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
    isNew: true,
    category: 'living-room',
    colors: ['Olive', 'Grey'],
    colorImages: {
      'Olive': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      'Grey': 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200'
    },
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '2',
    name: 'Nila Round Dining Table',
    description: 'Solid white round dining table with modern seating.',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800',
    category: 'dining'
  },
  {
    id: '3',
    name: 'Tara Armchair',
    description: 'Mid-century inspired accent chair.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    category: 'living-room'
  },
  {
    id: '4',
    name: 'Dev Storage Cabinet',
    description: 'Minimalist fluted wood sideboard.',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800',
    category: 'storage'
  },
  {
    id: '5',
    name: 'Rani Accent Chair',
    description: 'Elegant olive green velvet lounge chair.',
    price: 52000,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
    category: 'living-room'
  },
  {
    id: '6',
    name: 'Kiran Coffee Table',
    description: 'Round oak coffee table with a sculptural base.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=800',
    category: 'living-room'
  },
  {
    id: '7',
    name: 'Surya Rectangular Dining Table',
    description: 'Solid walnut dining table with seating for six, featuring copper lamps.',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    category: 'dining'
  },
  {
    id: '8',
    name: 'Aanya King Size Bed',
    description: 'Luxurious king size bed with an upholstered headboard.',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    category: 'bedroom'
  },
  {
    id: '9',
    name: 'Little Dreamer Cot',
    description: 'Safe and sturdy wooden baby cot with adjustable height.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    category: 'bedroom'
  },
  {
    id: '10',
    name: 'Focus Executive Desk',
    description: 'Sleek wooden desk with built-in storage drawers for your home office.',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    category: 'office'
  },
  {
    id: '11',
    name: 'ErgoPro Office Chair',
    description: 'Ergonomic office chair with lumbar support and breathable mesh.',
    price: 24000,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
    category: 'office'
  },
  {
    id: '12',
    name: 'Spin Mesh Rotating Chair',
    description: 'Modern 360-degree rotating office chair with adjustable armrests and height.',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    category: 'office'
  },
  {
    id: '13',
    name: 'Apollo Office Bookshelf',
    description: 'Tall open bookshelf perfect for files, books, and office decor.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800',
    category: 'office'
  }
];
