export default function getNeighborhoodsList() {
  this.sanFransciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFransciscoNeighborhoods.push(newNeighborhood);

    return this.sanFransciscoNeighborhoods;
  };
}
