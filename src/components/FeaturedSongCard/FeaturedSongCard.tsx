import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import feature from '../../data/featured-song.json';
import React from 'react';

export default function FeaturedSongCard() {
	return (
		<Card
			component='a'
			sx={{
				display: 'flex',
				textDecoration: 'none',
				color: 'inherit'
			}}
			href={feature.link}
			target='_blank'
		>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography
						variant="subtitle2"
						sx={{ color: 'text.secondary' }}
					>
						Featured Song {feature.date}
					</Typography>
					<Typography component="div" variant="h5">
						{feature.title}
					</Typography>
					<Typography
						variant="subtitle1"
						component="div"
						sx={{ color: 'text.secondary' }}
					>
						{feature.artist}
					</Typography>
					<Typography
						variant="caption"
						sx={{ color: 'text.secondary', fontStyle: 'italic' }}
					>
						"{feature.highlight.split('\n').map((line, index, arr) => (
							<React.Fragment key={index}>
								{line}
								{index < arr.length - 1 && <br />}
							</React.Fragment>
						))}"
					</Typography>
				</CardContent>
			</Box>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={feature.thumbnail}
				alt={`Album cover for ${feature.artist} - ${feature.title}`}
			/>
		</Card>
	);
}
