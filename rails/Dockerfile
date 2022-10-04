FROM ruby:3.1.2 AS rails-toolbox

# Default directory
ENV INSTALL_PATH /opt/app
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH
COPY . .
RUN rm -rf node_modules vendor
RUN gem install rails bundler
RUN gem install foreman
RUN bundle install

EXPOSE 5000

CMD ["foreman", "start", "-f", "/opt/app/Procfile.dev"]