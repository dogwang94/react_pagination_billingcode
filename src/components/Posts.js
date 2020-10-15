import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div class='container'>
    <table class='table table-striped'>
        <tr>
            <th>Billing Code</th>
            <th>Description</th>
        </tr>
        <tbody>
        {posts.map(post => (
            <tr key={[post.id]}>
                <td className=''>{post.billingCode}</td>
                <td className=''>{post.description}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  );
};

export default Posts;
