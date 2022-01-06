# Dockerfile for frontend
# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:14.17.3
# Set the working directory
WORKDIR /frontend
# copy package.json into the container
COPY package*.json /frontend/
# install dependencies
RUN npm install
# Copy the current directory contents into the container
COPY . /frontend/
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]