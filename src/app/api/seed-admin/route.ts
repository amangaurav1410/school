import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
    try {
        await connectDB();

        // Check if admin already exists
        const existingAdmin = await User.findOne({ username: 'admin' });
        if (existingAdmin) {
            return NextResponse.json({
                message: 'Admin already exists',
                credentials: {
                    username: 'admin',
                    password: 'admin123',
                    adminUrl: '/admin'
                }
            });
        }

        // Create admin user
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const adminUser = new User({
            username: 'admin',
            password: hashedPassword
        });

        await adminUser.save();

        return NextResponse.json({
            message: 'Admin user created successfully!',
            credentials: {
                username: 'admin',
                password: 'admin123',
                adminUrl: '/admin'
            }
        });
    } catch (error) {
        console.error('Error creating admin:', error);
        return NextResponse.json({ error: 'Failed to create admin user' }, { status: 500 });
    }
}
