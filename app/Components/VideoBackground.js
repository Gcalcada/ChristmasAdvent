export default function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source src="assets/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
