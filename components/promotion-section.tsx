import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function PromotionSection() {
  return (
    <div className=" mx-auto px-4 py-8"
      style={{
        backgroundImage:
          "url('/travel-coupon.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
    >
      <div className="container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Daftar untuk Menggunakan Kupon</h2>
        <Button variant="ghost" className="text-secondary">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-1">Kupon Diskon s.d Rp300rb</h3>
                <p className="text-sm text-gray-500">Berlaku untuk Pengguna Baru</p>
                <div className="mt-4">
                  <code className="bg-gray-100 px-3 py-1 rounded">HELLOSGCAID</code>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-secondary border-secondary">
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-1">Diskon 8%</h3>
                <p className="text-sm text-gray-500">min. transaksi Rp 500rb</p>
                <div className="mt-4">
                  <code className="bg-gray-100 px-3 py-1 rounded">JALANYUK</code>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-secondary border-secondary">
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-1">Diskon s.d 8%</h3>
                <p className="text-sm text-gray-500">min. transaksi Rp 300rb</p>
                <div className="mt-4">
                  <code className="bg-gray-100 px-3 py-1 rounded">JALANYUK</code>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-secondary border-secondary">
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  )
}

