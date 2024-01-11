import React from 'react';
import {
    BlockBetween,
    BlockDes,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
} from "../components/Component";
import NewsUsers from '../components/partials/default/new-users/User';
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
export default function My() {
  return (
      <React.Fragment>
          <Head title="My Dashboard" />
          <Content>
              <BlockHead size="sm">
                  <BlockBetween>
                      <BlockHeadContent>
                          <BlockTitle page>My Dashboard</BlockTitle>
                          <BlockDes className="text-soft">
                              <p>Sample editing</p>
                          </BlockDes>
                      </BlockHeadContent>



                  </BlockBetween>
              </BlockHead>
              <NewsUsers />
               <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente, perferendis eligendi molestias incidunt aspernatur quidem voluptates eveniet ipsam veritatis culpa eum aliquid explicabo hic recusandae eos rerum accusantium distinctio.
    </p>

          </Content>
      </React.Fragment>
  )
}
