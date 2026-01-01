echo "Preparing dependencies..."

echo "\nUpdating next dependencies..."
cd ../next
npm update

cd ..

echo "\nUpdating react dependencies..."
cd ../frontend/react
pnpm update

echo "\nDone updating dependencies"

