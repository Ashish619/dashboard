import React, {PropTypes} from 'react'
import {Header, Table, Icon, Image,Label,Checkbox} from 'semantic-ui-react'
import './subscription_list.less';


const SubscriptionTable = () => (
  <Table singleLine padded stackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Assigned</Table.HeaderCell>
        <Table.HeaderCell>Company b Name</Table.HeaderCell>
        <Table.HeaderCell>Owner</Table.HeaderCell>
        <Table.HeaderCell>Open Date</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Impact</Table.HeaderCell>

        <Table.HeaderCell><Checkbox /></Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Image avatar src='../../assets/avatar/1.jpg' size='tiny' shape='circular'/><span>Andrew Flinthoff</span></Table.Cell>
        
        <Table.Cell>General Surgery</Table.Cell>
        <Table.Cell>Berrit Collins</Table.Cell>
        <Table.Cell>April 3, 2017</Table.Cell>
      <Table.Cell> <Label color="teal" >
      Open
    </Label></Table.Cell>
        <Table.Cell>$150,000</Table.Cell>
        <Table.Cell><Checkbox /></Table.Cell>
        
      </Table.Row>
    
      <Table.Row>
        <Table.Cell><Image src='../../assets/avatar/3.jpg' avatar size='tiny' shape='circular'/><span>Kevin Petersen</span></Table.Cell>
        
        <Table.Cell>Bangladesh Bank LTD.</Table.Cell>
        <Table.Cell>Teressa Zoll</Table.Cell>
        <Table.Cell>Mayu 20, 2017</Table.Cell>
        <Table.Cell><Label color="red" >
        Declined
       </Label></Table.Cell>
        <Table.Cell>$210,000</Table.Cell>
        <Table.Cell><Checkbox defaultChecked /></Table.Cell>
        
      </Table.Row>
     
      <Table.Row>
        <Table.Cell><Image src='../../assets/avatar/5.jpg' avatar size='tiny' shape='circular'/>Mathew Hoggard</Table.Cell>
       
        <Table.Cell>Rib System Ltd.</Table.Cell>
        <Table.Cell>Rohanda Evans</Table.Cell>
        <Table.Cell>July 17, 2017</Table.Cell>
        <Table.Cell><Label color="red" >
        Declined
       </Label></Table.Cell>
        <Table.Cell>$452,000</Table.Cell>
        <Table.Cell><Checkbox /></Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell><Image src='../../assets/avatar/6.jpg' avatar size='tiny' shape='circular'/><span>Mickel Von</span></Table.Cell>
       
        <Table.Cell>Joom Shaper</Table.Cell>
        <Table.Cell>Ted Kivok</Table.Cell>
        <Table.Cell>April 4, 2017</Table.Cell>
        <Table.Cell><Label color="teal" >
        Open
       </Label></Table.Cell>
        <Table.Cell>$934,000</Table.Cell>
        <Table.Cell><Checkbox /></Table.Cell>
        
      </Table.Row>


    </Table.Body>
  </Table>
)

export default SubscriptionTable
