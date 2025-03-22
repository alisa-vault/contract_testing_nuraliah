const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const inventory = {
    "1": { id: "1", name: "Paprika Chicken Ciabatta", quantity: 50, price: 16.99 },
    "2": { id: "2", name: "Chocolate Muffin", quantity: 40, price: 5.99 },
    "3": { id: "3", name: "Fruit Yoghurt", quantity: 35, price: 7.99 },
    "4": { id: "4", name: "Gruyère Omelette", quantity: 30, price: 14.99 }
};

// Create Item endpoint
router.post('/', (req, res) => {
    const { name, quantity, price } = req.body;

    if (!name || typeof name !== 'string' || name.length === 0 || name.length > 100 ||
        typeof quantity !== 'number' || quantity < 0 ||
        typeof price !== 'number' || price < 0) {
        return res.status(400).json({ detail: 'Invalid input data.' });
    }

    const id = uuidv4();
    const newItem = { id, name, quantity, price };
    inventory[id] = newItem;

    res.status(201).json(newItem);
});

// Get Item by ID endpoint
router.get('/:id?', (req, res) => {
    const { id } = req.params;
    
    if (id) {
        if (inventory[id]) {
            return res.status(200).json(inventory[id]);
        } else {
            return res.status(404).json({ detail: 'Item does not exist.' });
        }
    }
    
    res.status(200).json(Object.values(inventory));
});

// Update Item endpoint
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, quantity, price } = req.body;

    if (!inventory[id]) {
        return res.status(404).json({ detail: 'Item does not exist.' });
    }

    if (!name || typeof name !== 'string' || name.length === 0 || name.length > 100 ||
        typeof quantity !== 'number' || quantity < 0 ||
        typeof price !== 'number' || price < 0) {
        return res.status(400).json({ detail: 'Invalid input data.' });
    }

    inventory[id] = { id, name, quantity, price };
    res.status(200).json(inventory[id]);
});

// Delete Item endpoint
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    if (!inventory[id]) {
        return res.status(404).json({ detail: 'Item does not exist.' });
    }

    delete inventory[id];
    res.status(204).send();
});

module.exports = router;
