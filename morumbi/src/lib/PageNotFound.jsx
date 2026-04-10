import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-8">
                
                {/* 404 Error Code */}
                <div className="space-y-4">
                    <h1 className="text-8xl font-display font-extrabold text-muted/30">404</h1>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                </div>
                
                {/* Main Message */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-foreground">
                        Página não encontrada
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Desculpe, não conseguimos encontrar a página <br/>
                        <span className="font-mono text-accent bg-accent/10 px-2 py-1 rounded">/{pageName}</span>. 
                    </p>
                    <p className="text-sm text-muted-foreground pt-2">
                        Pode ter digitado o endereço incorretamente ou a página foi movida.
                    </p>
                </div>
                
                {/* Action Button */}
                <div className="pt-6 flex justify-center">
                    <Link to="/">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-12 px-8 shadow-lg hover:scale-105 transition-all">
                            <Home className="w-5 h-5 mr-2" />
                            Voltar ao Início
                        </Button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}