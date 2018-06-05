import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Locations extends Component {
  render() {
    return (
      <div>
        <Card>
          <Image src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1528215529/storefont-inside.jpg" />
          <Card.Content>
            <Card.Header>Storefront</Card.Header>
            <Card.Meta>
              <span className="date">Established 2015</span>
            </Card.Meta>
            <Card.Description>Located on FM 2920</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/Storefront">
              <Icon name="snowflake" />
              Storefront Page
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1528215529/candyshop-inside.jpg" />
          <Card.Content>
            <Card.Header>Candy Shop</Card.Header>
            <Card.Meta>
              <span className="date">Established 2018</span>
            </Card.Meta>
            <Card.Description>Located on Spring Cypress</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/CandyShop">
              <Icon name="snowflake" />
              Candy Shop Page
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1528215530/icebarn.jpg" />
          <Card.Content>
            <Card.Header>Ice Barn</Card.Header>
            <Card.Meta>
              <span className="date">Established 2017</span>
            </Card.Meta>
            <Card.Description>Located on Louetta</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/IceBarn">
              <Icon name="snowflake" />
              ice Barn Page
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1528215532/lighthouse.jpg" />
          <Card.Content>
            <Card.Header>Storefront</Card.Header>
            <Card.Meta>
              <span className="date">Established 2016</span>
            </Card.Meta>
            <Card.Description>Located on Main St in Tomball</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/Lighthouse">
              <Icon name="snowflake" />
              Lighthouse Page
            </Link>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Locations;
