import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Index = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [posts, setPosts] = useState([]);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlePost = () => {
    if (image && caption) {
      setPosts([...posts, { image, caption }]);
      setImage(null);
      setCaption('');
      toast('Post created successfully!');
    } else {
      toast('Please add an image and a caption.');
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="image">Image</Label>
              <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div>
              <Label htmlFor="caption">Caption</Label>
              <Input id="caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
            </div>
            <Button onClick={handlePost}>Post</Button>
          </div>
        </CardContent>
      </Card>
      <Separator className="my-8" />
      <div className="w-full max-w-md space-y-4">
        {posts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.caption}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={post.image} alt={post.caption} className="w-full h-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;