export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to cmd.fyi</h1>
      <p>This is a personal homepage for testing out new ideas and tech.</p>
      <p>
        Following is a list of ideas I would like to add to the site or
        technologies I want to test out:
      </p>
      <ul style={{ listStyle: "none" }}>
        <li>
          <input type="checkbox" /> Set up a nice CI/CD pipeline with Docker and
          hosted in AWS.
        </li>
        <li>
          <input type="checkbox" /> Create a TIL page with login (admin page)
          and a db. Go simple with Firebase first?
        </li>
        <li>
          <input type="checkbox" /> Create a library of books I have read or
          want to read and my thoughts about them.
        </li>
      </ul>
    </div>
  );
}
