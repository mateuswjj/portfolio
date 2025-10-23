/* eslint-disable no-unused-vars */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

//TODO add content type
export function MultiActionAreaCard({ content }: { content: any }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={content.image_url}
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {content.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {content.message}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}