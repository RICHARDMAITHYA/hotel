import React, { useState } from 'react';
import '../Styles/Menu.css';
import { BiDish, BiDrink } from 'react-icons/bi';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const menuSections = [
    {
      title: 'Starters',
      icon: <BiDish className="menu-icon" />,
      groups: [
        [
          { name: 'Truffle Mushroom Soup', description: 'Creamy soup infused with truffle oil and wild mushrooms.', price: '$12' },
          { name: 'Crispy Calamari', description: 'Golden-fried calamari served with lemon aioli.', price: '$10' },
          { name: 'Bruschetta', description: 'Toasted baguette topped with fresh tomatoes, basil, and olive oil.', price: '$8' },
          { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic.', price: '$9' },
          { name: 'Garlic Prawns', description: 'Sautéed prawns in garlic butter sauce.', price: '$11' },
        ],
        [
          { name: 'Stuffed Mushrooms', description: 'Baked mushrooms filled with cheese and herbs.', price: '$9' },
          { name: 'Spring Rolls', description: 'Crispy rolls with vegetable filling.', price: '$7' },
          { name: 'Chicken Wings', description: 'Spicy wings served with ranch dip.', price: '$10' },
          { name: 'Mini Sliders', description: 'Beef sliders with caramelized onions.', price: '$12' },
          { name: 'Greek Mezze Platter', description: 'Hummus, olives, pita bread, and tzatziki.', price: '$13' },
        ],
      ],
    },
    {
      title: 'Main Courses',
      icon: <BiDish className="menu-icon" />,
      groups: [
        [
          { name: 'Grilled Salmon', description: 'Served with garlic butter sauce and seasonal vegetables.', price: '$22' },
          { name: 'Beef Tenderloin', description: 'Chargrilled steak with peppercorn sauce and mashed potatoes.', price: '$25' },
          { name: 'Vegetarian Risotto', description: 'Creamy Arborio rice with roasted vegetables and parmesan.', price: '$18' },
          { name: 'Roast Chicken', description: 'Herb-marinated chicken with roasted potatoes.', price: '$20' },
          { name: 'Lamb Chops', description: 'Grilled lamb chops with mint sauce.', price: '$24' },
        ],
        [
          { name: 'Seafood Paella', description: 'Spanish rice dish with prawns, mussels, and calamari.', price: '$23' },
          { name: 'Pasta Carbonara', description: 'Classic Italian pasta with pancetta and parmesan.', price: '$17' },
          { name: 'Vegetable Stir-Fry', description: 'Mixed vegetables sautéed in soy-ginger sauce.', price: '$16' },
          { name: 'Duck Confit', description: 'Slow-cooked duck leg with red wine reduction.', price: '$26' },
          { name: 'Stuffed Bell Peppers', description: 'Bell peppers filled with rice, beans, and cheese.', price: '$15' },
        ],
      ],
    },
    {
      title: 'Desserts',
      icon: <BiDish className="menu-icon" />,
      groups: [
        [
          { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center and vanilla ice cream.', price: '$9' },
          { name: 'Tiramisu', description: 'Classic Italian dessert with espresso-soaked ladyfingers.', price: '$8' },
          { name: 'Cheesecake', description: 'Velvety cheesecake with berry compote.', price: '$7' },
          { name: 'Crème Brûlée', description: 'Custard topped with caramelized sugar.', price: '$8' },
          { name: 'Apple Pie', description: 'Traditional pie with cinnamon-spiced apples.', price: '$7' },
        ],
        [
          { name: 'Panna Cotta', description: 'Silky Italian dessert with berry coulis.', price: '$8' },
          { name: 'Macarons', description: 'Assorted French almond cookies.', price: '$10' },
          { name: 'Ice Cream Sundae', description: 'Three scoops with toppings of choice.', price: '$6' },
          { name: 'Fruit Tart', description: 'Pastry crust filled with custard and fresh fruit.', price: '$9' },
          { name: 'Brownie Delight', description: 'Fudgy brownie with chocolate drizzle.', price: '$7' },
        ],
      ],
    },
    {
      title: 'Drinks',
      icon: <BiDrink className="menu-icon" />,
      groups: [
        [
          { name: 'Signature Cocktail', description: 'A blend of tropical fruits and premium spirits.', price: '$12' },
          { name: 'Fresh Juice', description: 'Choice of mango, pineapple, or orange.', price: '$6' },
          { name: 'Espresso', description: 'Rich and aromatic Italian coffee.', price: '$4' },
          { name: 'Latte', description: 'Smooth espresso with steamed milk.', price: '$5' },
          { name: 'Green Tea', description: 'Refreshing antioxidant-rich tea.', price: '$4' },
        ],
        [
          { name: 'Red Wine', description: 'Premium house selection.', price: '$15' },
          { name: 'White Wine', description: 'Crisp and refreshing.', price: '$15' },
          { name: 'Craft Beer', description: 'Locally brewed artisan beer.', price: '$8' },
          { name: 'Champagne', description: 'Celebratory sparkling wine.', price: '$20' },
          { name: 'Mocktail', description: 'Non-alcoholic fruity blend.', price: '$7' },
        ],
      ],
    },
  ];

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Exquisite Menu</h1>
      <p className="menu-intro">
        Indulge in a curated selection of gourmet dishes crafted by our master chefs.
        Each plate is a celebration of flavor, artistry, and elegance.
      </p>

      {/* Filter Buttons */}
      <div className="menu-filters">
        {menuSections.map((section) => (
          <button
            key={section.title}
            className={`filter-btn ${activeCategory === section.title ? 'active' : ''}`}
            onClick={() => setActiveCategory(section.title)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Active Category Display */}
      {menuSections
        .filter((section) => section.title === activeCategory)
        .map((section, index) => (
          <div key={index} className="menu-section">
            <h2 className="menu-heading">
              {section.icon} {section.title}
            </h2>
            {section.groups.map((group, gIndex) => (
              <div key={gIndex} className="menu-items">
                {group.map((item, i) => (
                  <div key={i} className="menu-item">
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      <span className="menu-price">{item.price}</span>
                    </div>
                    <p className="menu-description">{item.description}</p>
                    <button className="order-btn" onClick={() => handleOrderClick(item)}>
                      Order Now
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}

      {/* Order Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Order {selectedItem.name}</h2>
            <form className="order-form">
              <label>
                Name:
                <input type="text" placeholder="Your full name" required />
              </label>
              <label>
                Phone:
                <input type="tel" placeholder="Your phone number" required />
              </label>
              <label>
                Notes:
                <textarea placeholder="Any special requests?" />
              </label>
              <div className="modal-actions">
                <button type="submit" className="confirm-btn">Confirm Order</button>
                <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
