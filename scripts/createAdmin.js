const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB Connection URI
const MONGODB_URI = 'mongodb+srv://car:Aman5413@car.l3zw2eq.mongodb.net/maplefordschool';

// User Schema (same as in your models)
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

async function createAdminUser() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Check if admin already exists
        const existingAdmin = await User.findOne({ username: 'admin' });
        if (existingAdmin) {
            console.log('⚠️  Admin user already exists!');
            console.log('Username: admin');
            console.log('Password: admin123');
            await mongoose.disconnect();
            return;
        }

        // Create admin user
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const adminUser = new User({
            username: 'admin',
            password: hashedPassword
        });

        await adminUser.save();
        console.log('✅ Admin user created successfully!');
        console.log('');
        console.log('📝 Admin Login Credentials:');
        console.log('Username: admin');
        console.log('Password: admin123');
        console.log('');
        console.log('🔗 Admin Panel URL: http://localhost:3000/admin');

        await mongoose.disconnect();
        console.log('✅ Disconnected from MongoDB');
    } catch (error) {
        console.error('❌ Error creating admin user:', error);
        await mongoose.disconnect();
    }
}

createAdminUser();
