import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

export default class Notifications extends Component {
  static displayName = 'Notifications';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card title="重要提醒">
        <Row wrap>
          <Col l="12" xxs="24">
            <div style={styles.noticeItem}>
              <div style={styles.noticeItemTitle}>告警相关</div>
              <div style={styles.noticeItemBody}>
                <div style={styles.bodyItem}>
                  告警数量：<a href="#">100</a>
                </div>
                <div style={styles.bodyItem}>
                  未查看告警：<a href="#">0</a>
                </div>
              </div>
            </div>
          </Col>

          <Col l="12" xxs="24">
            <div style={styles.noticeItem}>
              <div style={styles.noticeItemTitle}>构建信息</div>
              <div style={styles.noticeItemBody}>
                <div style={styles.bodyItem}>
                  构建量<a href="#">100</a>
                </div>
                <div style={styles.bodyItem}>
                  成功：<a href="#">0</a>
                </div>
                <div style={styles.bodyItem}>
                  失败：<a href="#">0</a>
                </div>
                <div style={styles.bodyItem}>
                  进行中：<a href="#">0</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}

const styles = {
  noticeItem: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '50%',
    padding: '20px',
  },
  noticeItemTitle: {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#333',
  },
  noticeItemBody: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bodyItem: {
    display: 'flex',
    flexBasis: '33%',
    color: '#999',
    fontSize: '13px',
    marginBottom: '10px',
  },
};
