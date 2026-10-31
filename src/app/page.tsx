import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";
import { SimplePortfolio } from "@/components/portfolio/ZoneContent";

export default function HomePage() {
  return <PortfolioExplorer simpleContent={<SimplePortfolio />} />;
}
