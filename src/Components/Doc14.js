import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc14() {
    const doc14 = `<Root>
    <Customers>
      <Customer CustomerID="GREAL">
        <CompanyName>Great Lakes Food Market</CompanyName>
        <ContactName>Howard Snyder</ContactName>
        <ContactTitle>Marketing Manager</ContactTitle>
        <Phone>(503) 555-7555</Phone>
        <FullAddress>
          <Address>2732 Baker Blvd.</Address>
          <City>Eugene</City>
          <Region>OR</Region>
          <PostalCode>97403</PostalCode>
          <Country>USA</Country>
        </FullAddress>
      </Customer>
      <Customer CustomerID="LETSS">
        <CompanyName>Let's Stop N Shop</CompanyName>
        <ContactName>Jaime Yorres</ContactName>
        <ContactTitle>Owner</ContactTitle>
        <Phone>(415) 555-5938</Phone>
        <FullAddress>
          <Address>87 Polk St. Suite 5</Address>
          <City>San Francisco</City>
          <Region>CA</Region>
          <PostalCode>94117</PostalCode>
          <Country>USA</Country>
        </FullAddress>
      </Customer>
    </Customers>
    <Orders>
      
      <Order>
        <CustomerID>GREAL</CustomerID>
        <EmployeeID>8</EmployeeID>
        <OrderDate>1997-07-04T00:00:00</OrderDate>
        <RequiredDate>1997-08-01T00:00:00</RequiredDate>
        <ShipInfo ShippedDate="1997-07-14T00:00:00">
          <ShipVia>2</ShipVia>
          <Freight>4.42</Freight>
          <ShipName>Great Lakes Food Market</ShipName>
          <ShipAddress>2732 Baker Blvd.</ShipAddress>
          <ShipCity>Eugene</ShipCity>
          <ShipRegion>OR</ShipRegion>
          <ShipPostalCode>97403</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      <Order>
        <CustomerID>GREAL</CustomerID>
        <EmployeeID>1</EmployeeID>
        <OrderDate>1997-07-31T00:00:00</OrderDate>
        <RequiredDate>1997-08-28T00:00:00</RequiredDate>
        <ShipInfo ShippedDate="1997-08-05T00:00:00">
          <ShipVia>2</ShipVia>
          <Freight>116.53</Freight>
          <ShipName>Great Lakes Food Market</ShipName>
          <ShipAddress>2732 Baker Blvd.</ShipAddress>
          <ShipCity>Eugene</ShipCity>
          <ShipRegion>OR</ShipRegion>
          <ShipPostalCode>97403</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      <Order>
        <CustomerID>GREAL</CustomerID>
        <EmployeeID>4</EmployeeID>
        <OrderDate>1997-07-31T00:00:00</OrderDate>
        <RequiredDate>1997-08-28T00:00:00</RequiredDate>
        <ShipInfo ShippedDate="1997-08-04T00:00:00">
          <ShipVia>2</ShipVia>
          <Freight>18.53</Freight>
          <ShipName>Great Lakes Food Market</ShipName>
          <ShipAddress>2732 Baker Blvd.</ShipAddress>
          <ShipCity>Eugene</ShipCity>
          <ShipRegion>OR</ShipRegion>
          <ShipPostalCode>97403</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      
      <Order>
        <CustomerID>GREAL</CustomerID>
        <EmployeeID>3</EmployeeID>
        <OrderDate>1998-03-09T00:00:00</OrderDate>
        <RequiredDate>1998-04-06T00:00:00</RequiredDate>
        <ShipInfo ShippedDate="1998-03-18T00:00:00">
          <ShipVia>2</ShipVia>
          <Freight>33.68</Freight>
          <ShipName>Great Lakes Food Market</ShipName>
          <ShipAddress>2732 Baker Blvd.</ShipAddress>
          <ShipCity>Eugene</ShipCity>
          <ShipRegion>OR</ShipRegion>
          <ShipPostalCode>97403</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      <Order>
        <CustomerID>GREAL</CustomerID>
        <EmployeeID>3</EmployeeID>
        <OrderDate>1998-04-07T00:00:00</OrderDate>
        <RequiredDate>1998-05-05T00:00:00</RequiredDate>
        <ShipInfo ShippedDate="1998-04-15T00:00:00">
          <ShipVia>2</ShipVia>
          <Freight>25.19</Freight>
          <ShipName>Great Lakes Food Market</ShipName>
          <ShipAddress>2732 Baker Blvd.</ShipAddress>
          <ShipCity>Eugene</ShipCity>
          <ShipRegion>OR</ShipRegion>
          <ShipPostalCode>97403</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      <Order>
        <CustomerID>GREAL</CustomerID>
        <EmployeeID>4</EmployeeID>
        <OrderDate>1998-04-22T00:00:00</OrderDate>
        <RequiredDate>1998-05-20T00:00:00</RequiredDate>
        <ShipInfo>
          <ShipVia>3</ShipVia>
          <Freight>18.84</Freight>
          <ShipName>Great Lakes Food Market</ShipName>
          <ShipAddress>2732 Baker Blvd.</ShipAddress>
          <ShipCity>Eugene</ShipCity>
          <ShipRegion>OR</ShipRegion>
          <ShipPostalCode>97403</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      <Order>
        <CustomerID>GREAL</CustomerID>
        <EmployeeID>4</EmployeeID>
        <OrderDate>1998-04-30T00:00:00</OrderDate>
        <RequiredDate>1998-06-11T00:00:00</RequiredDate>
        <ShipInfo>
          <ShipVia>3</ShipVia>
          <Freight>14.01</Freight>
          <ShipName>Great Lakes Food Market</ShipName>
          <ShipAddress>2732 Baker Blvd.</ShipAddress>
          <ShipCity>Eugene</ShipCity>
          <ShipRegion>OR</ShipRegion>
          <ShipPostalCode>97403</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      <Order>
        <CustomerID>LAZYK</CustomerID>
        <EmployeeID>1</EmployeeID>
        <OrderDate>1997-03-21T00:00:00</OrderDate>
        <RequiredDate>1997-04-18T00:00:00</RequiredDate>
        <ShipInfo ShippedDate="1997-04-10T00:00:00">
          <ShipVia>3</ShipVia>
          <Freight>7.48</Freight>
          <ShipName>Lazy K Kountry Store</ShipName>
          <ShipAddress>12 Orchestra Terrace</ShipAddress>
          <ShipCity>Walla Walla</ShipCity>
          <ShipRegion>WA</ShipRegion>
          <ShipPostalCode>99362</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
      <Order>
        <CustomerID>LAZYK</CustomerID>
        <EmployeeID>8</EmployeeID>
        <OrderDate>1997-05-22T00:00:00</OrderDate>
        <RequiredDate>1997-06-19T00:00:00</RequiredDate>
        <ShipInfo ShippedDate="1997-06-26T00:00:00">
          <ShipVia>2</ShipVia>
          <Freight>11.92</Freight>
          <ShipName>Lazy K Kountry Store</ShipName>
          <ShipAddress>12 Orchestra Terrace</ShipAddress>
          <ShipCity>Walla Walla</ShipCity>
          <ShipRegion>WA</ShipRegion>
          <ShipPostalCode>99362</ShipPostalCode>
          <ShipCountry>USA</ShipCountry>
        </ShipInfo>
      </Order>
  
  
    </Orders>
  </Root>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc14}</h3>
  )
}
