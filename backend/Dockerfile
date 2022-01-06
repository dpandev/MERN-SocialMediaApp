# Dockerfile for backend
# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:14.17.3
# Set the working directory
WORKDIR /backend
# copy package.json into the container
COPY package*.json /backend/
# install dependencies
RUN npm install
# Copy the current directory contents into the container
COPY . /backend/
# Make port 8800 available to the world outside this container
EXPOSE 8800
# Run the app when the container launches
CMD ["npm", "start"]