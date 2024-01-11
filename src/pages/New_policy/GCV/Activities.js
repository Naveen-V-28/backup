import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import { Block } from '../../../components/Component'

export default function Activities(props) {
    return (
        <Block>
            <Row className='gy-2 mt-4 gx-2'>
                <Col md="2">
                    <Button className="btn btn-dim bg-purple-dim text-purple" size="md" onClick={() => props.handleBack()}>GO BACK</Button>
                </Col>
                <Col md="2">
                    <Button color='primary' size="md" onClick={() => props.handleNext()}>NEXT</Button>
                </Col>
            </Row>
        </Block>
    )
}
