import React from 'react';
import Rating from 'react-rating';
import {Ico} from '../../components/ui'
import Emojify from 'react-emojione';
import {
 
  Row,
  Col,
  Card,
  Icon,
} from 'antd'



const App = React.createClass({

  render() {
    return (
      <div>

        <Row gutter={10}>
          <Col xs={24} md={6} lg={6}>
            <Card title='Basic Rating'>
             <Rating />
            </Card>
            
            
          </Col>
          <Col xs={24} md={6} lg={6}>
          <Card title='Readonly rating'>
          <Rating
          initialRate={3}
          readonly
        />
          </Card>
          
          
        </Col>
        <Col xs={24} md={6} lg={6}>
        <Card title='Readonly fractional rating'>
        <Rating
        initialRate={2.5}
        readonly
      />
        </Card>
        
        
      </Col>
      <Col xs={24} md={6} lg={6}>
      <Card title='1 to 10 with step 2 (odd numbers)'>
      <Rating
      stop={10}
      step={2}
    />
      </Card>
      
      
    </Col>
    
        </Row>
        <Row gutter={10}>
        
        <Col xs={24} md={6} lg={6}>
        <Card title='Fractional rating'>
        <Rating
        empty="fa fa-star-o fa-2x"
        full="fa fa-star fa-2x"
        fractions={2}
      />
        </Card>
        
        
      </Col>
      <Col xs={24} md={6} lg={6}>
      <Card title='Alert when rate changes'>
      <Rating
      onChange={(rate) => alert(rate)}
    />
      </Card>
      
      
    </Col>
    <Col xs={24} md={6} lg={6}>
    <Card title='Colored rating'>
    <Rating
  empty="fa fa-thumbs-o-up fa-2x"
  full="fa fa-thumbs-up fa-2x"
/>
    </Card>
    
    
  </Col>
  
<Col xs={24} md={6} lg={6}>
<Card title='Custom each symbol'>
<Rating
stop={4}
empty="fa fa-battery-empty fa-2x"
full={['fa fa-battery-1 fa-2x', 'fa fa-battery-2 fa-2x',
  'fa fa-battery-3 fa-2x', 'fa fa-battery-4 fa-2x']}
/>
</Card>


</Col>
      </Row>
      <Row gutter={10}>
      <Col md={24} xs={24}>
      <Card title='Emojione'>
      <Emojify  style={{height: 64, width: 64, margin: 10}}>
      :) :cat: :tiger: ^___^ :D :unicorn: xD xDD :robot: :octopus: :pushpin: :ghost: :bird: :umbrella: :tongue: :kimono: :crocodile: :monkey: :owl: :baby: :princess: :punch: :muscle: :chicken: :hamburger: :pizza: :doughnut: :motorcycle: :amphora: :dolls: :tada: :satellite: :trumpet: :cookie: :blowfish: :cry:
      </Emojify>
      </Card>
      </Col>
      </Row>
      </div>
    );
  }
});

export default App
