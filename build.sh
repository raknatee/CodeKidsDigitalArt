docker-compose exec project yarn build
rm -r docs
mv ./project/dist docs