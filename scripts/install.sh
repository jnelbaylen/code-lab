echo "Preparing dependencies..."

echo "\nInstalling react dependencies..."
cd ../frontend/react
pnpm install

cd ..

echo "\nInstalling next dependencies..."
cd ../next
pnpm install

echo "\nDone isntalling dependencies"