import React from 'react';

export default function StatusScreen({ loading, error }) {
  if (error) {
    return (
      <div className="container has-text-centered" style={{ height: '100vh' }}>
        <article
          className="message is-danger is-align-self-center message-body has-text-danger"
          style={{ height: '100%' }}
        >
          <div style={{ marginTop: '40vh' }}>
            Sorry! The Beer API is offline, no beer today :(
          </div>
        </article>
      </div>
    );
  } else if (loading) {
    return (
      <div className="container has-text-centered" style={{ height: '100vh' }}>
        <article
          className="message is-info is-align-self-center message-body has-text-info"
          style={{ height: '100%' }}
        >
          <div style={{ marginTop: '40vh' }}>
            Filling up your glass with beer...
          </div>
        </article>
      </div>
    );
  }
}
