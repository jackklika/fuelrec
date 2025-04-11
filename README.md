# Fuelrec
Fuelrec is a toy project to demonstrate node and NestJS capabilities.

# How to start it
- Optional: `nvm use 22` to use node version 22. Otherwise it should work on other versions.
- `npm i` to install packages
- `npm start dev` to run the devserver
- `curl http://localhost:3000/stop` to get all stops and their latest prices

It should perform seeding of the db on startup.

# Technical decisions
- Using nestjs because of its first-class typescript support and depndency injection (similar to Java Spring)
- sqlite because it's simple for now -- would normally use postgres